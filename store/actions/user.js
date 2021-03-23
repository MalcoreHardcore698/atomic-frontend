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

export function setUserFolders(folders) {
  return {
    type: C.SET_USER_FOLDERS,
    payload: folders
  }
}

export function setUserFolder(folder) {
  return {
    type: C.SET_USER_FOLDER,
    payload: folder
  }
}
