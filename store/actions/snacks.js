import C from '../types/snacks'

export function setItem(item) {
  return {
    type: C.SET_ITEM,
    payload: { item }
  }
}

export function removeItem(id) {
  return {
    type: C.REMOVE_ITEM,
    payload: { id }
  }
}

export function clearItems() {
  return {
    type: C.CLEAR_ITEMS
  }
}
