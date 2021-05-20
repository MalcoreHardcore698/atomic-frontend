import gql from 'graphql-tag'
import { MessageFields } from '../../fragments'

export const SEND_MESSAGE = gql`
  mutation sendMessage($recipient: String!, $text: String!) {
    sendMessage(recipient: $recipient, text: $text) {
      ...MessageFields
    }
  }
  ${MessageFields}
`

export const READ_MESSAGES = gql`
  mutation readMessages($id: [ID]!) {
    readMessages(id: $id)
  }
`
