/* eslint-disable */
import { combineReducers } from 'redux'

import rootReducer from './root'
import userReducer from './user'
import drawerReducer from './drawer'
import stepperReducer from './stepper'
import documentsReducer from './documents'
import snacksReducer from './snacks'
import modalReducer from './modal'

export default combineReducers({
  root: rootReducer,
  user: userReducer,
  drawer: drawerReducer,
  stepper: stepperReducer,
  documents: documentsReducer,
  snacks: snacksReducer,
  modal: modalReducer
})
