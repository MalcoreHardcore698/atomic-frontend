import gql from 'graphql-tag'
import { TicketMessageFields } from '../../fragments'

export const SEND_TICKET_MESSAGE = gql`
  mutation sendTicketMessage(
    $ticket: ID!
    $recipient: String!
    $text: String!
    $isClient: Boolean
  ) {
    sendTicketMessage(ticket: $ticket, recipient: $recipient, text: $text, isClient: $isClient) {
      ...TicketMessageFields
    }
  }
  ${TicketMessageFields}
`
