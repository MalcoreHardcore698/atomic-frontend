import gql from 'graphql-tag'
import { RoleFields } from '../../fragments'

export const GET_ROLE = gql`
  query getRole($id: ID!) {
    getRole(id: $id) {
      ...RoleFields
    }
  }
  ${RoleFields}
`

export const GET_ROLES = gql`
  query getRoles(
    $sort: String
    $offset: Int
    $limit: Int
    $search: String
    $permissions: [Permission]
    $createdAt: String
  ) {
    getRoles(
      sort: $sort
      offset: $offset
      limit: $limit
      search: $search
      permissions: $permissions
      createdAt: $createdAt
    ) {
      ...RoleFields
    }
  }
  ${RoleFields}
`

export const CREATE_ROLE = gql`
  mutation createRole($input: RoleCreateInput!) {
    createRole(input: $input) {
      ...RoleFields
    }
  }
  ${RoleFields}
`

export const UPDATE_ROLE = gql`
  mutation updateRole($id: ID!, $input: RoleUpdateInput!) {
    updateRole(id: $id, input: $input) {
      ...RoleFields
    }
  }
  ${RoleFields}
`

export const DELETE_ROLE = gql`
  mutation deleteRole($id: [ID]!) {
    deleteRole(id: $id) {
      ...RoleFields
    }
  }
  ${RoleFields}
`
