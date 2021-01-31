import C from '../types/user'

const initialState = {
  id: 0,
  name: '',
  about: '',
  account: '',
  email: '',
  phone: '',
  role: '',
  folders: [],
  projects: [],
  articles: [],
  likedProjects: [],
  settings: [''],
  token: '',
  updatedAt: '',
  createdAt: '',
  register: false,
  authenticated: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_USER:
      return {
        ...action.payload,
        authenticated: true
      }
    case C.SET_LOGOUT:
      return {
        authenticated: false
      }
    case C.UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case C.ADD_USER_FOLDER:
      return {
        ...state,
        folders: action.payload
      }
    case C.REMOVE_USER_FOLDER:
      return {
        ...state,
        folders: action.payload
      }
    default:
      return state
  }
}

export default userReducer
