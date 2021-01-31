import gql from 'graphql-tag'
import { ChatFields, MessageFields } from '../../fragments'

export const GET_USER_CHATS = gql`
  query getUserChats {
    getUserChats {
      chat {
        ...ChatFields
        messages {
          ...MessageFields
        }
      }
      status
      updatedAt
      createdAt
    }
  }
  ${ChatFields}
  ${MessageFields}
`

export const ADD_USER_CHAT = gql`
  mutation addUserChat($recipient: String!) {
    addUserChat(recipient: $recipient)
  }
`
