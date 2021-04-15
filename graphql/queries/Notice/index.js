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
