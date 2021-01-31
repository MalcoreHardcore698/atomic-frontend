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
  query getMetaIndex($status: PostStatus) {
    getUsers {
      ...UserFields
    }
    getArticles(status: $status) {
      ...ArticleFields
    }
    getProjects(status: $status) {
      ...ProjectFields
    }
  }
  ${UserFields}
  ${ArticleFields}
  ${ProjectFields}
`

export const GET_META_AUTHORS = gql`
  query getMetaAuthors($search: String) {
    getUsers(search: $search) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const GET_META_ARTICLES = gql`
  query getMetaArticles($status: PostStatus) {
    getArticles(status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
  }
  ${ArticleFields}
  ${CategoryFields}
`

export const GET_META_PROFILE = gql`
  query getMetaProfile {
    getUser {
      ...UserFields
      projects {
        ...ProjectFields
      }
      articles {
        ...ArticleFields
      }
      likedProjects {
        ...ProjectFields
      }
    }
    getCategories {
      ...CategoryFields
    }
  }
  ${UserFields}
  ${ProjectFields}
  ${ArticleFields}
  ${CategoryFields}
`

export const GET_META_PROJECTS = gql`
  query getMetaProjects($status: PostStatus) {
    getProjects(status: $status) {
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
  query getMetaDashboardArticles($status: PostStatus) {
    getArticles(status: $status) {
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
  query getMetaDashboardProjects($status: PostStatus, $account: [AccountType]) {
    getProjects(status: $status) {
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
  query getMetaDashboardCategories {
    getCategories {
      ...CategoryFields
    }
    getCategoryTypes
  }
  ${CategoryFields}
`

export const GET_META_DASHBOARD_TICKETS = gql`
  query getMetaDashboardTickets {
    getTickets {
      ...TicketFields
    }
  }
  ${TicketFields}
`

export const GET_META_DASHBOARD_USERS = gql`
  query getMetaDashboardUsers {
    getUsers {
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
  query getMetaDashboardRoles {
    getRoles {
      ...RoleFields
    }
    getPermissions
  }
  ${RoleFields}
`
