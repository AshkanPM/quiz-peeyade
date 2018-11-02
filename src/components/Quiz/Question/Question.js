import React, { Component } from 'react'

import Answers from './Answers/Answers'

class Question extends Component {

	render = () => {
		const { question, correct, incorrect, handleAnswer, lock } = this.props

		if (question === null || question === undefined) {
			return <h2>There are no questions available.</h2>
		}

		return (
			<React.Fragment>
				<span className="hint">
					Question {question.id}
				</span>
				<h2>{question.question}</h2>

				<Answers
					answers={question.answers}
					handleAnswer={handleAnswer}
					correct={correct}
					incorrect={incorrect}
					lock={lock}
				/>
			</React.Fragment>
		)
	}
}

export default Question
