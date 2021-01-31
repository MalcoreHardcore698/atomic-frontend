import gql from 'graphql-tag'
import { ImageFields } from '../../fragments'

export const GET_FILES = gql`
  mutation getImages($search: String) {
    getImages(search: $search) {
      ...ImageFields
    }
  }
  ${ImageFields}
`

export const CREATE_IMAGE = gql`
  mutation createImage($file: Upload!) {
    createImage(file: $file) {
      ...ImageFields
    }
  }
  ${ImageFields}
`

export const DELETE_IMAGE = gql`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      ...ImageFields
    }
  }
  ${ImageFields}
`
