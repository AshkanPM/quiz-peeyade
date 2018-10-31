export const START_QUIZ = 'START_GAME'
export const CORRECT_SCORE = 'CORRECT_SCORE'
export const INCORRECT_SCORE = 'INCORRECT_SCORE'

export const startQuiz = (name) => {
	return {
		type: START_QUIZ,
		payload: {
			isStarted: true,
			name: name
		}
	}
}

export const updateCorrectScore = () => {
	return {
		type: CORRECT_SCORE,
		payload: {
			correctScore: 2
		}
	}
}

export const updateIncorrectScore = () => {
	return {
		type: INCORRECT_SCORE,
		payload: {
			incorrectScore: 1
		}
	}
}
