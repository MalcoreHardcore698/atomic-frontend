import gql from 'graphql-tag'
import { TicketFields } from '../../fragments'

export const GET_TICKET = gql`
  query getTicket($id: ID!) {
    getTicket(id: $id) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const GET_TICKETS = gql`
  query getTickets($offset: Int, $limit: Int, $search: String) {
    getTickets(offset: $offset, limit: $limit, search: $search) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const CREATE_USER_TICKET = gql`
  mutation createUserTicket($input: UserTicketCreateInput!) {
    createUserTicket(input: $input)
  }
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

export const CLOSE_TICKET = gql`
  mutation closeTicket($id: ID!) {
    closeTicket(id: $id) {
      ...TicketFields
    }
  }
  ${TicketFields}
`
