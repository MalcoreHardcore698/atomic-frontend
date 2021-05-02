import gql from 'graphql-tag'
import { CategoryFields, RoleFields } from '../../fragments'

export const GET_ROLE = gql`
  query getRole($id: ID!) {
    getRole(id: $id) {
      ...RoleFields
    }
  }
  ${RoleFields}
`

export const GET_ROLES = gql`
  query getRoles($offset: Int, $limit: Int, $search: String) {
    getRoles(offset: $offset, limit: $limit, search: $search) {
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
