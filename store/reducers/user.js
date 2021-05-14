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
    case C.SET_USER_FOLDERS:
      return {
        ...state,
        folders: action.payload
      }
    case C.SET_USER_FOLDER:
      return {
        ...state,
        folders: state.folders.map((folder) =>
          folder.id === action.payload.id ? action.payload : folder
        )
      }
    case C.REMOVE_PROJECT_FROM_USER_FOLDER:
      return {
        ...state,
        folders: state.folders.map((folder) =>
          folder.id === action.payload.folderId
            ? {
                ...folder,
                projects: folder.projects.filter(
                  (projectId) => projectId !== action.payload.projectId
                )
              }
            : folder
        )
      }
    case C.UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default userReducer
