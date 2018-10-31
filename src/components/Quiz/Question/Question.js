import React, { Component } from 'react'

import Answers from './Answers/Answers'

class Question extends Component {

	componentDidMount = () => {
		this.timer = setTimeout(this.timeUp, 8000)
	}

	render = () => {
		const { question } = this.props

		return (
			<React.Fragment>
				<span className="hint">
					Question 1
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
