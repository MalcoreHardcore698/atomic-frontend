import gql from 'graphql-tag'
import { CommentFields } from '../../fragments'

export const GET_COMMENTS = gql`
  query getComments($id: ID!) {
    getComments(id: $id) {
      ...CommentFields
    }
  }
  ${CommentFields}
`

export const LIKE_COMMENT = gql`
  mutation likeComment($id: ID!) {
    likeComment(id: $id) {
      ...CommentFields
    }
  }
  ${CommentFields}
`

export const CREATE_COMMENT = gql`
  mutation createComment($input: CommentCreateInput!) {
    createComment(input: $input) {
      ...CommentFields
    }
  }
  ${CommentFields}
`

export const UPDATE_COMMENT = gql`
  mutation updateComment($id: ID!, $input: CommentUpdateInput!) {
    updateComment(id: $id, input: $input) {
      ...CommentFields
    }
  }
  ${CommentFields}
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      ...CommentFields
    }
  }
  ${CommentFields}
`
