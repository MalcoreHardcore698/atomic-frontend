import gql from 'graphql-tag'
import {
  CategoryFields,
  ArticleFields,
  ProjectFields,
  TicketFields,
  UserFields,
  RoleFields,
  DashboardSettingsFields
} from '../../fragments'

export const GET_GENDER_TYPES = gql`
  query getGenderTypes {
    getGenderTypes
  }
`

export const GET_ACCOUNT_TYPES = gql`
  query getAccountTypes {
    getAccountTypes
  }
`

export const GET_NOTICE_TYPES = gql`
  query getNoticeTypes {
    getNoticeTypes
  }
`

export const GET_CATEGORY_TYPES = gql`
  query getCategoryTypes {
    getCategoryTypes
  }
`

export const GET_PERMISSIONS = gql`
  query getPermissions {
    getPermissions
  }
`

export const GET_POST_STATUSES = gql`
  query getPostStatus {
    getPostStatus
  }
`

export const GET_META = gql`
  query getDashboardSettings {
    getDashboardSettings {
      general {
        logotype {
          path
        }
      }
      meta {
        title
        description
      }
    }
  }
`

export const GET_META_SCAFFOLD = gql`
  query getDashboardSettings {
    getDashboardSettings {
      scaffold {
        title
        primary {
          ...ProjectFields
        }
        residues {
          ...ProjectFields
        }
        background {
          id
          filename
          size
          path
        }
      }
    }
  }
  ${ProjectFields}
`

export const GET_META_INDEX = gql`
  query getMetaIndex($offset: Int, $limit: Int, $status: PostStatus) {
    getUsers(limit: 3, role: "USER") {
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
  query getMetaAuthors($offset: Int, $limit: Int, $search: String, $role: String) {
    getUsers(offset: $offset, limit: $limit, search: $search, role: $role) {
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

export const GET_META_SETTINGS_PROJECTS = gql`
  query getProjects(
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
      id
      title
    }
  }
`

export const GET_META_DASHBOARD_STATISTICS = gql`
  query getDashboardStatistics {
    getDashboardStatistics {
      title
      total
      graph {
        count
        createdAt
      }
    }
  }
`

export const GET_META_DASHBOARD_ACTIVITIES = gql`
  query getDashboardActivities {
    getDashboardActivities {
      id
      user {
        name
        email
        avatar {
          path
        }
      }
      message
      entityType
      identityString
      createdAt
    }
  }
`

export const GET_META_DASHBOARD_SETTINGS = gql`
  query getDashboardSettings {
    getDashboardSettings {
      ...DashboardSettingsFields
    }
  }
  ${DashboardSettingsFields}
`

export const GET_META_DASHBOARD_PREVIEW_ARTICLES = gql`
  query getMetaDashboardPreviewArticles($offset: Int, $limit: Int) {
    getArticles(offset: $offset, limit: $limit) {
      id
      author {
        name
        avatar {
          path
        }
      }
      title
      body
      category {
        id
        name
      }
    }
  }
`

export const GET_META_DASHBOARD_PREVIEW_PROJECTS = gql`
  query getMetaDashboardPreviewProjects($offset: Int, $limit: Int) {
    getProjects(offset: $offset, limit: $limit) {
      id
      title
      description
      company {
        name
        email
        avatar {
          path
        }
      }
      category {
        id
        name
      }
      status
    }
  }
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
    $role: String
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
    getUsers(account: $account, role: $role) {
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
  query getMetaDashboardUsers($offset: Int, $limit: Int, $role: String) {
    getUsers(offset: $offset, limit: $limit, role: $role) {
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

export const UPDATE_META_DASHBOARD_SETTINGS = gql`
  mutation updateMetaDashboardSettings($input: DashboardSettingsInput!) {
    updateDashboardSettings(input: $input) {
      ...DashboardSettingsFields
    }
  }
  ${DashboardSettingsFields}
`
