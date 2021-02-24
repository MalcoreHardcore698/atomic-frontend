import gql from 'graphql-tag'
import {
  CategoryFields,
  ArticleFields,
  ProjectFields,
  TicketFields,
  UserFields,
  RoleFields
} from '../../fragments'

export const GET_META_INDEX = gql`
  query getMetaIndex($offset: Int, $limit: Int, $status: PostStatus) {
    getUsers {
      ...UserFields
    }
    getArticles(status: $status) {
      ...ArticleFields
    }
    getProjects(offset: $offset, limit: $limit, status: $status) {
      ...ProjectFields
    }
  }
  ${UserFields}
  ${ArticleFields}
  ${ProjectFields}
`

export const GET_META_AUTHORS = gql`
  query getMetaAuthors($offset: Int, $limit: Int, $search: String) {
    getUsers(offset: $offset, limit: $limit, search: $search) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const GET_META_ARTICLES = gql`
  query getMetaArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
  }
  ${ArticleFields}
  ${CategoryFields}
`

export const GET_META_PROJECTS = gql`
  query getMetaProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      ...ProjectFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${ProjectFields}
  ${CategoryFields}
`

export const GET_META_DASHBOARD_ARTICLES = gql`
  query getMetaDashboardArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${ArticleFields}
  ${CategoryFields}
`

export const GET_META_DASHBOARD_PROJECTS = gql`
  query getMetaDashboardProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
    $account: [AccountType]
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      ...ProjectFields
    }
    getUsers(account: $account) {
      ...UserFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${UserFields}
  ${ProjectFields}
  ${CategoryFields}
`

export const GET_META_DASHBOARD_CATEGORIES = gql`
  query getMetaDashboardCategories($offset: Int, $limit: Int) {
    getCategories(offset: $offset, limit: $limit) {
      ...CategoryFields
    }
    getCategoryTypes
  }
  ${CategoryFields}
`

export const GET_META_DASHBOARD_TICKETS = gql`
  query getMetaDashboardTickets($offset: Int, $limit: Int) {
    getTickets(offset: $offset, limit: $limit) {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const GET_META_DASHBOARD_USERS = gql`
  query getMetaDashboardUsers($offset: Int, $limit: Int) {
    getUsers(offset: $offset, limit: $limit) {
      name
      email
      phone
      avatar {
        id
        path
        size
      }
      about
      members
      company {
        name
        email
        avatar {
          path
        }
      }
      account
      role {
        id
        name
      }
    }
    getRoles {
      ...RoleFields
    }
  }
  ${RoleFields}
`

export const GET_META_DASHBOARD_ROLES = gql`
  query getMetaDashboardRoles($offset: Int, $limit: Int) {
    getRoles(offset: $offset, limit: $limit) {
      ...RoleFields
    }
    getPermissions
  }
  ${RoleFields}
`
