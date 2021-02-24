import React, { useState, useEffect, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Member from '../../atomic-ui/components/Member'
import Alert from '../../atomic-ui/components/Alert'
import Search from '../../atomic-ui/components/Search'
import Spinner from '../../atomic-ui/components/Spinner'

import TicketChat from '../TicketChat'
import { setDocuments } from '../../store/actions/documents'
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

export const View = ({ auth, ticket, appearance, onMemberLink, onReport, onAttach, ...props }) => {
  const [currentTicket, setCurrentTicket] = useState(null)
  // TODO: Fetch more tickets by scrolling
  // eslint-disable-next-line no-unused-vars
  const [offsetTickets, setOffsetTickets] = useState(0)
  const [loadingTicket, setLoadingTicket] = useState(false)
  const [tickets, setTickets] = useState([])
  const documents = useSelector((state) => state.documents)
  const dispatch = useDispatch()

  const variablesTickets = useMemo(
    () => ({
      offset: offsetTickets,
      limit: LIMIT_TICKETS
    }),
    [offsetTickets]
  )

  const { data, loading, refetch } = useQuery(queries.GET_TICKET, {
    variables: {
      id: ticket
    }
  })

  const [
    closeTicket,
    { data: dataCloseTicket, loading: loadingCloseTicket, error: errorCloseTicket }
  ] = useMutation(queries.CLOSE_TICKET)

  const [sendTicketMessage, { data: dataSendMessage, loading: loadingSendMessage }] = useMutation(
    queries.SEND_TICKET_MESSAGE
  )

  const {
    data: dataTickets,
    loading: loadingTickets,
    error: errorTickets
    // fetchMore: updateTickets
  } = useQuery(queries.GET_TICKETS, {
    variables: variablesTickets
  })

  useEffect(() => {
    if (!loading && data?.getTicket) {
      setCurrentTicket(data.getTicket)
    }

    if (!loadingCloseTicket && dataCloseTicket?.closeTicket) {
      const candidate = dataCloseTicket.closeTicket

      setCurrentTicket(candidate)
      dispatch(
        setDocuments(
          (documents || []).map((document) => (document.id === candidate.id ? candidate : document))
        )
      )
    }
  }, [data, dataCloseTicket, loading, loadingCloseTicket])

  useEffect(() => {
    if (!loadingTickets && dataTickets) {
      setTickets(dataTickets.getTickets)
    }
  }, [dataTickets, loadingTickets])

  useEffect(() => {
    if (!loadingSendMessage && dataSendMessage) {
      setCurrentTicket((prev) => ({
        ...prev,
        messages: dataSendMessage.sendTicketMessage
      }))
    }
  }, [dataSendMessage, loadingSendMessage])

  return (
    <Wrap {...props} appearance={appearance}>
      <Tickets>
        <Search appearance={'ghost'} onSubmit={() => {}} />
        {!loadingTickets ? (
          tickets.map((item) => (
            <Ticket
              key={item.id}
              name={item.title}
              position={item.author?.name}
              active={currentTicket && currentTicket.id === item.id}
              onClick={async () => {
                setLoadingTicket(true)
                await refetch({ id: item.id })
                setCurrentTicket(item)
                setLoadingTicket(false)
              }}
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
        auth={auth}
        ticket={currentTicket}
        loading={
          loading || loadingSendMessage || loadingTicket || loadingTickets || errorCloseTicket
        }
        onLink={onMemberLink}
        onFinish={() =>
          closeTicket({
            variables: {
              id: ticket
            }
          })
        }
        onReport={onReport}
        onAttach={onAttach}
        onSubmit={(value) =>
          sendTicketMessage({
            variables: {
              ticket: currentTicket.id,
              recipient: currentTicket.author?.email,
              text: value
            }
          })
        }
      />
    </Wrap>
  )
}

View.defaultProps = {
  appearance: 'default'
}

export default View
