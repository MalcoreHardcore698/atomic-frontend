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
  query getTickets(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $author: String
    $counsellor: String
    $category: String
    $status: StatusTicket
    $createdAt: String
  ) {
    getTickets(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      author: $author
      counsellor: $counsellor
      category: $category
      status: $status
      createdAt: $createdAt
    ) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const GET_USER_TICKETS = gql`
  query getUserTickets {
    getUserTickets {
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
  mutation deleteTicket($id: [ID]!) {
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
