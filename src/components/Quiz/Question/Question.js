import React, { Component } from 'react'

import Answers from './Answers/Answers'

class Question extends Component {

	state = {
		correct: null,
		incorrect: null
	}

	componentDidUpdate = (prevProps) => {
		// Resets the timer whenever a valid question gets provided
		if (prevProps.question !== this.props.question
			&& this.props.question !== null) {
			this.timer = setTimeout(this.timeUp, 8000)
		}
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

				<Answers
					answers={question.answers}
					handleAnswer={this.handleAnswer}
					correct={this.state.correct}
					incorrect={this.state.incorrect}
				/>
			</React.Fragment>
		)
	}

	timeUp = () => {
		this.handleAnswer(false)
	}

	handleAnswer = (answerId) => {
		this.setState({correct: this.props.question.correct})

		if (this.props.question.correct === answerId) {
			this.setState({incorrect: null})
			this.props.handleCorrect()
		} else {
			this.setState({incorrect: answerId})
			this.props.handleIncorrect()
		}
	}
}

export default Question
