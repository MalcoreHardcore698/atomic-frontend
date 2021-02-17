import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Member from '../../atomic-ui/components/Member'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import Search from '../SearchBar'
import TicketChat from '../TicketChat'
import queries from '../../graphql/queries'
import { Loader } from '../Styled'

export const Wrap = styled(Row)`
  height: 100%;
  flex-grow: 1;

  @media only screen and (max-width: 568px) {
    flex-direction: column;
  }

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const Tickets = styled(Column)`
  grid-gap: 0;
  width: 320px;

  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`

export const Ticket = styled(Member)`
  margin: 10px 0 0 0;
  padding: 10px;
  border-radius: var(--surface-border-radius);

  ${({ active }) =>
    active &&
    css`
      background: var(--input-background);
    `}
`

export const LIMIT_TICKETS = 36

export const View = ({
  ticket,
  appearance,
  onMemberLink,
  onFinish,
  onReport,
  onAttach,
  onSubmit,
  ...props
}) => {
  const [currentTicket, setCurrentTicket] = useState(null)
  // TODO: Fetch more tickets by scrolling
  // eslint-disable-next-line no-unused-vars
  const [offsetTickets, setOffsetTickets] = useState(0)
  const [tickets, setTickets] = useState([])

  const { data, loading } = useQuery(queries.GET_TICKET, {
    variables: {
      id: ticket
    },
    fetchPolicy: 'no-cache'
  })

  const {
    data: dataTickets,
    loading: loadingTickets,
    error: errorTickets
    // fetchMore: updateTickets
  } = useQuery(queries.GET_TICKETS, {
    variables: {
      offset: offsetTickets,
      limit: LIMIT_TICKETS
    },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    if (!loading && data.getTicket) {
      setCurrentTicket(data.getTicket)
    }
  }, [data, loading])

  useEffect(() => {
    if (!loadingTickets && dataTickets) {
      setTickets((prev) => [...prev, ...dataTickets.getTickets])
    }
  }, [dataTickets, loadingTickets])

  return (
    <Wrap {...props} appearance={appearance}>
      <Tickets>
        <Search appearance={'ghost'} />
        {!loadingTickets ? (
          tickets.map((item) => (
            <Ticket
              key={item.id}
              name={item.title}
              position={item.author?.name}
              active={currentTicket && currentTicket.id === item.id}
              onClick={() => setCurrentTicket(item)}
            />
          ))
        ) : errorTickets ? (
          <Alert appearance={'error'} style={{ marginTop: 15, width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию об обращении
          </Alert>
        ) : (
          <Loader>
            <Spinner />
          </Loader>
        )}
      </Tickets>
      <TicketChat
        ticket={currentTicket}
        loading={loading}
        onLink={onMemberLink}
        onFinish={onFinish}
        onReport={onReport}
        onAttach={onAttach}
        onSubmit={onSubmit}
      />
    </Wrap>
  )
}

View.defaultProps = {
  appearance: 'default'
}

export default View
