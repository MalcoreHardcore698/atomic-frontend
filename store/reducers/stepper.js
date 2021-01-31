import C from '../types/stepper'

const initialState = {
  name: '',
  content: null
}

export const stepperReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_STEPPER:
      return action.payload
    default:
      return state
  }
}

export default stepperReducer
