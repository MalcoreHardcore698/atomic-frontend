import gql from 'graphql-tag'
import {
  UserFields,
  UserMemberFields,
  MessageFields,
  ProjectFields,
  NoticeFields, UserForReset
} from "../../fragments"

export const GOOGLE_AUTH = gql`
  mutation googleAuth($accessToken: String!) {
    googleAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const FACEBOOK_AUTH = gql`
  mutation facebookAuth($accessToken: String!) {
    facebookAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const CHECKIN = gql`
  mutation checkin($login: String!) {
    checkin(login: $login)
  }
`

export const LOGIN = gql`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const REGISTER = gql`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const RESET = gql`
  mutation updateUserPasswordResetStatus($email: String!) {
    updateUserPasswordResetStatus(email: $email) {
      ...UserForReset
    }
  }
  ${UserForReset}
`

export const CHECK_EMAIL = gql`
  query getResetTokenByEmail($email: String, $token: String) {
    ...UserForReset
  }
  ${UserForReset}
`
export const CHECK_RESET_TOKEN = gql`
  mutation checkTokenAndResetPassword($email: String!, $token: String!, $password: String!) {
    checkTokenAndResetPassword(email: $email, token: $token, password: $password) {
      ...UserForReset
    }
  }
  ${UserForReset}
`

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`

export const CHECK_USER = gql`
  query checkUser($search: String!) {
    checkUser(search: $search) {
      status
      message
    }
  }
`

export const GET_USER = gql`
  query getUser($email: String) {
    getUser(email: $email) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const GET_USERS = gql`
  query getUsers(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
    $createdAt: String
  ) {
    getUsers(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
      createdAt: $createdAt
    ) {
      name
      about
      email
      avatar {
        path
      }
      account
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
      }
    }
  }
`

export const GET_USERS_FOR_TICKET = gql`
  query getUsers(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
    ) {
      name
      email
    }
  }
`

export const GET_USER_MEMBERS = gql`
  query getUserMembers($email: String!) {
    getUserMembers(email: $email) {
      ...UserMemberFields
    }
  }
  ${UserMemberFields}
`

export const GET_USER_PARTICIPANT_PROJECTS = gql`
  query getProjects($member: String) {
    getProjects(member: $member) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`

export const GET_USER_PROJECTS = gql`
  query getProjects($author: String) {
    getProjects(author: $author) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`

export const CREATE_USER = gql`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const UPDATE_CLIENT_USER = gql`
  mutation updateClientUser($input: UserUpdateInput!) {
    updateClientUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $input: UserUpdateInput!) {
    updateUser(email: $email, input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const DELETE_USER = gql`
  mutation deleteUser($email: [String]!) {
    deleteUser(email: $email) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const INVITE_USER_MEMBER = gql`
  mutation inviteUserMember($email: String!) {
    inviteUserMember(email: $email)
  }
`

export const APPLY_INVITE_USER_MEMBER = gql`
  mutation applyInviteUserMember($id: ID!, $email: String!) {
    applyInviteUserMember(id: $id, email: $email) {
      ...NoticeFields
    }
  }
  ${NoticeFields}
`

export const REJECT_INVITE_USER_MEMBER = gql`
  mutation rejectInviteUserMember($id: ID!, $email: String!) {
    rejectInviteUserMember(id: $id, email: $email) {
      ...NoticeFields
    }
  }
  ${NoticeFields}
`

export const APPOINT_USER_MEMBER = gql`
  mutation appointUserMember($email: String!) {
    appointUserMember(email: $email) {
      ...UserMemberFields
    }
  }
  ${UserMemberFields}
`

export const EXCLUDE_USER_MEMBER = gql`
  mutation excludeUserMember($email: String!) {
    excludeUserMember(email: $email) {
      ...UserMemberFields
    }
  }
  ${UserMemberFields}
`

export const DISMISS_USER_MEMBER = gql`
  mutation dismissUserMember($email: String!) {
    dismissUserMember(email: $email) {
      ...UserMemberFields
    }
  }
  ${UserMemberFields}
`

export const ADD_USER_PROJECT = gql`
  mutation addUserProject($project: ID!, $folder: ID!) {
    addUserProject(project: $project, folder: $folder)
  }
`

export const REMOVE_USER_PROJECT = gql`
  mutation removeUserProject($project: ID!, $folder: ID!) {
    removeUserProject(project: $project, folder: $folder)
  }
`

export const ADD_USER_FOLDER = gql`
  mutation addUserFolder($name: String!) {
    addUserFolder(name: $name) {
      id
      name
      projects
    }
  }
`

export const DELETE_USER_FOLDER = gql`
  mutation deleteUserFolder($id: ID!) {
    deleteUserFolder(id: $id) {
      id
      name
      projects
    }
  }
`

export const GET_USER_CHATS = gql`
  query getUserChats {
    getUserChats {
      chat {
        id
        type
        title
        members {
          name
          avatar {
            path
          }
        }
        messages {
          ...MessageFields
        }
      }
      status
      updatedAt
      createdAt
    }
  }
  ${MessageFields}
`
