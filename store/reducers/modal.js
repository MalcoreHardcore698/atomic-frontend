import C from '../types/modal'

const initialState = {
  size: 's',
  routes: null
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_MODAL:
      return {
        routes: action.payload.routes,
        size: action.payload.size
      }
    default:
      return state
  }
}

export default modalReducer
