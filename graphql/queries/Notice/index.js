import gql from 'graphql-tag'
import { NoticeFields } from '../../fragments'

export const GET_NOTIFICATIONS = gql`
  query getNotifications($author: String) {
    getNotifications(author: $author) {
      ...NoticeFields
    }
  }
  ${NoticeFields}
`

export const READ_NOTIFICATIONS = gql`
  mutation readNotifications($id: [ID]!) {
    readNotifications(id: $id)
  }
`
