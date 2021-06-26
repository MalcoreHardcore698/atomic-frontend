import gql from 'graphql-tag'
import { ProjectFields, UserFields, DashboardSettingsFields } from '../../fragments'

export const GET_STATUS_TICKET_TYPES = gql`
  query getStatusTicketTypes {
    getStatusTicketTypes
  }
`

export const GET_STATUS_CHAT_TYPES = gql`
  query getStatusChatTypes {
    getStatusChatTypes
  }
`

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

export const GET_META_AUTHORS = gql`
  query getMetaAuthors($offset: Int, $limit: Int, $search: String, $role: String) {
    getUsers(offset: $offset, limit: $limit, search: $search, role: $role) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const GET_META_SETTINGS_PROJECTS = gql`
  query getProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: [PostStatus]
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
      status
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
  query getMetaDashboardPreviewArticles($offset: Int, $limit: Int, $status: [PostStatus]) {
    getArticles(offset: $offset, limit: $limit, status: $status) {
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
      status
    }
  }
`

export const GET_META_DASHBOARD_PREVIEW_PROJECTS = gql`
  query getMetaDashboardPreviewProjects($offset: Int, $limit: Int, $status: [PostStatus]) {
    getProjects(offset: $offset, limit: $limit, status: $status) {
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

export const UPDATE_META_DASHBOARD_SETTINGS = gql`
  mutation updateMetaDashboardSettings($input: DashboardSettingsInput!) {
    updateDashboardSettings(input: $input) {
      ...DashboardSettingsFields
    }
  }
  ${DashboardSettingsFields}
`
