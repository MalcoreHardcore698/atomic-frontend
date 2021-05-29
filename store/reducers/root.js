/* eslint-disable */
import C from '../types/root'

const initialState = {
  mutation: null,
  settings: {
    general: {
      logotype: '' // /images/logo.png
    },
    meta: {
      title: '',
      description: ''
    }
  },
  currentPage: 'projects',
  displayMethod: 'grid',
  visibleFilters: false,
  variables: null,
  scrollTop: 0,
  callback: () => {},
  members: [],
  companies: [],
  categories: [],
  statuses: [],
  screenshots: [],
  messages: [],
  search: '',
  params: {},
  files: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_MUTATE:
      return {
        ...state,
        ...action.payload
      }
    case C.SET_SETTINGS:
      return {
        ...state,
        settings: action.payload.settings
      }
    case C.SET_MEMBERS:
      return {
        ...state,
        members: action.payload.members || []
      }
    case C.SET_SCREENSHOTS:
      return {
        ...state,
        screenshots: action.payload.screenshots || []
      }
    case C.SET_FILES:
      return {
        ...state,
        files: action.payload.files || []
      }
    case C.SET_SEARCH:
      return {
        ...state,
        search: action.payload.search || ''
      }
    case C.SET_PARAMS:
      return {
        ...state,
        params: action.payload.params || {}
      }
    case C.SET_FOLDER:
      return {
        ...state,
        folder: action.payload.folder || []
      }
    case C.SET_COMPANIES:
      return {
        ...state,
        companies: action.payload.companies || []
      }
    case C.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories || []
      }
    case C.SET_STATUSES:
      return {
        ...state,
        statuses: action.payload.statuses || []
      }
    case C.SET_CHAT:
      return {
        ...state,
        chat: action.payload.chat
      }
    case C.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages
      }
    case C.SET_DISPLAY_METHOD:
      return {
        ...state,
        displayMethod: action.payload.displayMethod
      }
    case C.SET_VISIBLE_FILTERS:
      return {
        ...state,
        visibleFilters: action.payload.visibleFilters
      }
    case C.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
    case C.ADD_MEMBER:
      return {
        ...state,
        members: [...state.members, action.payload.member]
      }
    case C.ADD_SCREENSHOT:
      return {
        ...state,
        screenshots: [...state.screenshots, action.payload.screenshot]
      }
    case C.ADD_FILE:
      return {
        ...state,
        files: [...state.files, action.payload.file]
      }
    case C.REMOVE_MEMBER:
      return {
        ...state,
        members: state.members.filter(
          (member) => (member.email || member.value?.email) !== action.payload.email
        )
      }
    case C.REMOVE_SCREENSHOT:
      return {
        ...state,
        screenshots: state.screenshots.filter((screenshot) => screenshot.id !== action.payload.id)
      }
    case C.REMOVE_PROJECT_FROM_FOLDER:
      return {
        ...state,
        folder: {
          ...state.folder,
          projects: state.folder.projects.filter((projectId) => projectId !== action.payload.id)
        }
      }
    case C.REMOVE_FILE:
      return {
        ...state,
        files: state.files.filter((file) => file.id !== action.payload.id)
      }
    case C.CLEAR_MEMBERS:
      return {
        ...state,
        members: []
      }
    case C.CLEAR_SCREENSHOTS:
      return {
        ...state,
        screenshots: []
      }
    case C.CLEAR_FILES:
      return {
        ...state,
        files: []
      }
    default:
      return state
  }
}

export default rootReducer
