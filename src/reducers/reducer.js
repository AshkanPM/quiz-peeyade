import { combineReducers } from 'redux'

import quizReducer from './quizReducer.js'

export default combineReducers({
	quiz: quizReducer
})
