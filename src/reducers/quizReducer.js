import { START_QUIZ, RESTART_QUIZ, CORRECT_SCORE, INCORRECT_SCORE } from '../actions/quizActions'

const initialState = {
	isStarted: false,
	name: '',
	score: 0
}

const quizReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_QUIZ:
			return {...initialState, ...action.payload}
		case RESTART_QUIZ:
			return {...initialState}
		case CORRECT_SCORE:
			return {...state, score: state.score + action.payload.correctScore}
		case INCORRECT_SCORE:
			return {...state, score: state.score - action.payload.incorrectScore}
		default:
	}

	return state
}

export default quizReducer
