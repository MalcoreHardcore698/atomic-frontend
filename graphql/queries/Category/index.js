import gql from 'graphql-tag'
import { CategoryFields } from '../../fragments'

export const GET_CATEGORY = gql`
  query getCategory($id: ID!) {
    getCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`

export const GET_CATEGORIES = gql`
  query getCategories($offset: Int, $limit: Int, $type: CategoryType, $search: String) {
    getCategories(offset: $offset, limit: $limit, type: $type, search: $search) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`

export const CREATE_CATEGORY = gql`
  mutation createCategory($input: CategoryCreateInput!) {
    createCategory(input: $input) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID!, $input: CategoryUpdateInput!) {
    updateCategory(id: $id, input: $input) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`
