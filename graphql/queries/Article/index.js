import gql from 'graphql-tag'
import { ArticleFields } from '../../fragments'

export const GET_ARTICLE = gql`
  query getArticle($id: ID!) {
    getArticle(id: $id) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`

export const GET_ARTICLES = gql`
  query getArticles(
    $offset: Int
    $limit: Int
    $search: String
    $author: String
    $status: PostStatus
  ) {
    getArticles(offset: $offset, limit: $limit, search: $search, author: $author, status: $status) {
      id
      author {
        name
        avatar {
          path
        }
      }
      title
      body
      preview {
        path
      }
      category {
        id
        name
      }
    }
  }
`

export const CREATE_ARTICLE = gql`
  mutation createArticle($input: ArticleCreateInput!, $status: PostStatus) {
    createArticle(input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`

export const UPDATE_ARTICLE = gql`
  mutation updateArticle($id: ID!, $input: ArticleUpdateInput!, $status: PostStatus) {
    updateArticle(id: $id, input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`

export const DELETE_ARTICLE = gql`
  mutation deleteArticle($id: ID!, $status: PostStatus) {
    deleteArticle(id: $id, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`
