import C from '../types/drawer'

const HISTORY_LIMIT = 10

const initialState = {
  icon: '',
  color: '',
  title: '',
  half: false,
  side: 'right',
  content: '',
  history: []
}

export const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_DRAWER:
      return {
        icon: (action.payload && action.payload.icon) ?? '',
        color: (action.payload && action.payload.color) ?? '',
        title: (action.payload && action.payload.title) ?? '',
        half: (action.payload && action.payload.half) ?? false,
        side: (action.payload && action.payload.side) ?? 'right',
        content: (action.payload && action.payload.content) ?? '',
        history: (action.payload && (state.history.length < HISTORY_LIMIT)) ? [
          ...state.history,
          action.payload
        ] : [
          action.payload
        ],
        open: !!(action.payload && action.payload.content)
      }
    case C.SET_BACK_DRAWER:
      return {
        ...state.history[state.history.length - 2],
        history: state.history.slice(0, state.history.length - 1),
        open: true
      }
    default:
      return state
  }
}

export default drawerReducer
