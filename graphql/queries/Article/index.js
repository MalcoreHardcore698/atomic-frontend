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
  query getArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
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
