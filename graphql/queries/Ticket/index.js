import gql from 'graphql-tag'
import { TicketFields } from '../../fragments'

export const GET_TICKETS = gql`
  query getTickets($search: String) {
    getTickets(search: $search) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const CREATE_TICKET = gql`
  mutation createTicket($input: TicketCreateInput!) {
    createTicket(input: $input) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const UPDATE_TICKET = gql`
  mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
    updateTicket(id: $id, input: $input) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const DELETE_TICKET = gql`
  mutation deleteTicket($id: ID!) {
    deleteTicket(id: $id) {
      ...TicketFields
    }
  }
  ${TicketFields}
`
