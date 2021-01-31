import C from '../types/user'
import config from '../../config'

const SECRET = config.get('secret') || 'secret'

export function setUser(user) {
  if (user.token && typeof window !== 'undefined') {
    localStorage.setItem(SECRET, user.token)
  }

  return {
    type: C.SET_USER,
    payload: user
  }
}

export function setLogout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SECRET)
  }

  return { type: C.SET_LOGOUT }
}

export function updateUser(user) {
  return {
    type: C.UPDATE_USER,
    payload: user
  }
}

export function addUserFolder(folders) {
  return {
    type: C.ADD_USER_FOLDER,
    payload: folders
  }
}

export function removeUserFolder(folders) {
  return {
    type: C.REMOVE_USER_FOLDER,
    payload: folders
  }
}
