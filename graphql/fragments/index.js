import gql from 'graphql-tag'

export const UserFields = gql`
  fragment UserFields on User {
    name
    about
    avatar {
      path
    }
    account
    email
    phone
    members
    company {
      name
      email
      avatar {
        path
      }
    }
    role {
      id
      name
      permissions
    }
    folders {
      id
      name
      projects
    }
    token
    gender
    register
    settings
    dateOfBirth
    updatedAt
    createdAt
  }
`

export const UserMemberFields = gql`
  fragment UserMemberFields on User {
    name
    about
    avatar {
      id
      path
    }
    role {
      id
      name
      permissions
    }
    account
    email
  }
`

export const UserForReset = gql`
  fragment UserForReset on User {
    email
    resetPasswordKey
  }
`

export const NoticeFields = gql`
  fragment NoticeFields on Notice {
    id
    type
    author {
      email
      avatar {
        path
      }
    }
    title
    message
    company {
      email
      avatar {
        path
      }
    }
    createdAt
  }
`

export const ProjectFields = gql`
  fragment ProjectFields on Project {
    id
    author {
      name
      avatar {
        path
      }
    }
    title
    body
    characteristics {
      id
      name
      value
      isVisualize
    }
    description
    company {
      name
      email
      avatar {
        path
      }
    }
    preview {
      id
      path
    }
    members {
      name
      about
      avatar {
        path
      }
      account
      email
    }
    files {
      id
      filename
      size
      path
    }
    screenshots {
      id
      filename
      size
      path
    }
    presentation
    category {
      id
      name
    }
    rating {
      email
      phone
    }
    status
    updatedAt
    createdAt
  }
`

export const ArticleFields = gql`
  fragment ArticleFields on Article {
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
    status
    updatedAt
    createdAt
  }
`

export const CategoryFields = gql`
  fragment CategoryFields on Category {
    id
    name
    type
    description
    createdAt
  }
`

export const MessageFields = gql`
  fragment MessageFields on Message {
    id
    user {
      name
      email
      avatar {
        path
      }
    }
    text
    type
    updatedAt
    createdAt
  }
`

export const TicketMessageFields = gql`
  fragment TicketMessageFields on TicketMessage {
    id
    user {
      name
      email
      avatar {
        path
      }
    }
    ticket {
      id
    }
    text
    type
    updatedAt
    createdAt
  }
`

export const ChatFields = gql`
  fragment ChatFields on Chat {
    id
    type
    title
    members {
      name
      email
      avatar {
        path
      }
    }
  }
`

export const ImageFields = gql`
  fragment ImageFields on Image {
    id
    path
    filename
    updatedAt
    createdAt
  }
`

export const FileFields = gql`
  fragment FileFields on File {
    id
    path
    filename
    updatedAt
    createdAt
  }
`

export const RoleFields = gql`
  fragment RoleFields on Role {
    id
    name
    permissions
    createdAt
  }
`

export const TicketFields = gql`
  fragment TicketFields on Ticket {
    id
    title
    author {
      name
      email
      avatar {
        path
      }
    }
    counsellor {
      name
      email
      avatar {
        path
      }
    }
    messages {
      id
      text
      user {
        name
        email
        avatar {
          path
        }
      }
      updatedAt
      createdAt
    }
    category {
      id
      name
    }
    status
    updatedAt
    createdAt
  }
`

export const CommentFields = gql`
  fragment CommentFields on Comment {
    id
    author {
      name
      avatar {
        id
        path
        filename
      }
    }
    likes {
      email
      name
    }
    text
    updatedAt
    createdAt
  }
`

export const DashboardSettingsFields = gql`
  fragment DashboardSettingsFields on DashboardSettings {
    general {
      logotype {
        path
        size
      }
    }
    scaffold {
      title
      primary {
        id
        title
      }
      residues{
        id
        title
      }
      background {
        path
        size
      }
    }
    meta {
      title
      description
    }
  }
`
