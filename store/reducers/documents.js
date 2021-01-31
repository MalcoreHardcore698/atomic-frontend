import C from '../types/documents'

const initialState = null

export const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_DOCUMENTS:
      return action.payload.documents
    default:
      return state
  }
}

export default documentReducer
