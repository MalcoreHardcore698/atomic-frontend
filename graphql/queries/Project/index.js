import gql from 'graphql-tag'
import { ProjectFields } from '../../fragments'

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    getProject(id: $id) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`

export const GET_PROJECTS = gql`
  query getProjects($offset: Int, $limit: Int, $status: PostStatus) {
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
      preview {
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
      category {
        id
        name
      }
      status
      updatedAt
      createdAt
    }
  }
`

export const GET_PROJECTS_BY_IDS = gql`
  query getProjectsByIds($projects: [ID]!, $status: PostStatus) {
    getProjectsByIds(projects: $projects, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`

export const LIKE_PROJECT = gql`
  mutation likeProject($id: ID!) {
    likeProject(id: $id) {
      likedProjects {
        ...ProjectFields
      }
    }
  }
  ${ProjectFields}
`

export const CREATE_PROJECT = gql`
  mutation createProject($input: ProjectCreateInput!, $status: PostStatus) {
    createProject(input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $input: ProjectUpdateInput!, $status: PostStatus) {
    updateProject(id: $id, input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!, $status: PostStatus) {
    deleteProject(id: $id, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`
