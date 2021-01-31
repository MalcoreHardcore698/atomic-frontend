import C from '../types/drawer'

export function setDrawer(drawer) {
  return {
    type: C.SET_DRAWER,
    payload: drawer
  }
}

export function setBackDrawer() {
  return {
    type: C.SET_BACK_DRAWER
  }
}
