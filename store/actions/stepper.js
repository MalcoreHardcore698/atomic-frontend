import C from '../types/stepper'

export function setStepper(stepper) {
  return {
    type: C.SET_STEPPER,
    payload: stepper
  }
}
