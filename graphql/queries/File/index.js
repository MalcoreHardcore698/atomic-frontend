import gql from 'graphql-tag'
import { FileFields } from '../../fragments'

export const GET_FILES = gql`
  mutation getFiles($sort: String, $search: String) {
    getFiles(sort: $sort, search: $search) {
      ...FileFields
    }
  }
  ${FileFields}
`

export const CREATE_FILE = gql`
  mutation createFile($file: Upload!) {
    createFile(file: $file) {
      ...FileFields
    }
  }
  ${FileFields}
`

export const DELETE_FILE = gql`
  mutation deleteFile($id: ID!) {
    deleteFile(id: $id) {
      ...FileFields
    }
  }
  ${FileFields}
`
