import gql from 'graphql-tag'
import { UserFields, MessageFields, ProjectFields } from '../../fragments'

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
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
    ) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const GET_USER_MEMBERS = gql`
  query getUserMembers($email: String!) {
    getUserMembers(email: $email) {
      name
      about
      avatar {
        id
        path
      }
      account
      email
    }
  }
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
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      ...UserFields
    }
  }
  ${UserFields}
`

export const ADD_USER_PROJECT = gql`
  mutation addUserProject($project: ID!, $folder: ID!) {
    addUserProject(project: $project, folder: $folder)
  }
`

export const ADD_USER_FOLDER = gql`
  mutation addUserFolder($name: String!) {
    addUserFolder(name: $name) {
      id
      name
      projects {
        id
      }
    }
  }
`

export const DELETE_USER_FOLDER = gql`
  mutation deleteUserFolder($id: ID!) {
    deleteUserFolder(id: $id) {
      id
      name
      projects {
        id
      }
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
