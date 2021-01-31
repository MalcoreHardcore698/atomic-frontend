import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Member from '../../atomic-ui/components/Member'
import Alert from '../../atomic-ui/components/Alert'

import TicketForm from '../FormTicket'
import Search from '../SearchBar'

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

export const View = ({
  tickets,
  appearance,
  onMemberLink,
  onFinish,
  onReport,
  onAttach,
  onSubmit,
  ...props
}) => {
  const [currentTicket, setCurrentTicket] = useState(null)

  return (
    <Wrap {...props} appearance={appearance}>
      <Tickets>
        <Search appearance={'ghost'} />
        {tickets?.length > 0 ? (
          tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              name={ticket.title}
              budge={ticket.messages.reduce((acc, item) => acc + (item.unreaded ? 1 : 0), 0)}
              position={ticket.token}
              onClick={() => setCurrentTicket(ticket)}
              active={currentTicket && currentTicket.id === ticket.id}
            />
          ))
        ) : (
          <Alert style={{ marginTop: 15 }} appearance={'warning'}>
            Активные обращения отсутствуют
          </Alert>
        )}
      </Tickets>
      <TicketForm
        ticket={currentTicket}
        appearance={'ghost'}
        onFinish={onFinish}
        onReport={onReport}
        onLink={onMemberLink}
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
