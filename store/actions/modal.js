import C from '../types/modal'

export function setModal(routes, size = 's') {
  return {
    type: C.SET_MODAL,
    payload: {
      routes,
      size
    }
  }
}
