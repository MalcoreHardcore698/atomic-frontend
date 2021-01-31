import { v4 } from 'uuid'

import C from '../types/snacks'

const LIMIT = 10
const initialState = []

export const snackReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_ITEM:
      return [
        ...state,
        {
          id: v4(),
          ...action.payload.item
        }
      ].slice(0, LIMIT)
    case C.REMOVE_ITEM:
      return [
        ...state.filter((item) => item.id !== action.payload.id)
      ]
    case C.CLEAR_ITEMS:
      return []
    default:
      return state
  }
}

export default snackReducer
