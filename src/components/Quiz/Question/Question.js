import React, { Component } from 'react'

import Answers from './Answers/Answers'

class Question extends Component {

	componentDidMount = () => {
		this.timer = setTimeout(this.timeUp, 8000)
	}

	render = () => {
		const { question } = this.props

		if (question === null) {
			return <h2>There are no questions available.</h2>
		}

		return (
			<React.Fragment>
				<span className="hint">
					Question {question.id}
				</span>
				<h2>{question.question}</h2>

				<Answers answers={question.answers} handleAnswer={this.handleAnswer} />
			</React.Fragment>
		)
	}

	timeUp = () => {
		this.props.handleIncorrect()
	}

	handleAnswer = (answerId) => {
		if (this.props.question.correct === answerId) {
			this.props.handleCorrect()
		} else {
			this.props.handleIncorrect()
		}
	}
}

export default Question
