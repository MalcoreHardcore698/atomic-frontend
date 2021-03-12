/* eslint-disable */
import C from '../types/root'

const initialState = {
  mutation: null,
  variables: null,
  scrollTop: 0,
  callback: () => {},
  members: [],
  screenshots: [],
  messages: [],
  files: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_MUTATE:
      return {
        ...state,
        ...action.payload
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
    case C.SET_FOLDER:
      return {
        ...state,
        folder: action.payload.folder || []
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
