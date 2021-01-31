import gql from 'graphql-tag'
import { ChatFields, MessageFields } from '../../fragments'

export const GET_CHAT = gql`
  query getChat($id: ID!) {
    getChat(id: $id) {
      ...ChatFields
      messages {
        ...MessageFields
      }
    }
  }
  ${ChatFields}
  ${MessageFields}
`
