import React, { Component } from 'react'
import styles from './Quiz.scss'
import { connect } from 'react-redux'
import { updateCorrectScore, updateIncorrectScore } from '../../actions/quizActions'
import questionGenerator from '../../helpers/questionGenerator'

import Status from './Status/Status'
import Question from './Question/Question'
import MainMenu from './MainMenu/MainMenu'
import IconButton from '../UI/IconButton/IconButton'
import Modal from '../UI/Modal/Modal'

import * as quizFixtures from '../../fixtures/quiz.json'

const SECONDS_LIMIT = 4

class Quiz extends Component {
	state = {
		questionGenerator: null,
		currentQuestion: null,
		secondsRemaining: SECONDS_LIMIT,
		correct: null,
		incorrect: null
	}

	componentDidMount = () => {
		const qG = questionGenerator(quizFixtures.quizQuestions)
		this.setState({questionGenerator: qG})
	}

	render = () => {
		const {isStarted, name, updateCorrectScore, updateIncorrectScore} = this.props

		return (
			<div className={styles.quiz}>
				<div className={styles.header}>
					<IconButton icon="stop" />
					<Status name={name} secondsRemaining={this.state.secondsRemaining} />
					<IconButton icon="redo" />
				</div>

				<div className={styles.container}>
					<Question
						question={this.state.currentQuestion}
						handleAnswer={this.handleAnswer}
						correct={this.state.correct}
						incorrect={this.state.incorrect}
					/>
				</div>

				<Modal show={!isStarted}>
					<MainMenu handleQuizStart={this.nextQuestion} />
				</Modal>
			</div>
		)
	}

	nextQuestion = () => {
		this.timer = setInterval(() => {
			if (this.state.secondsRemaining <= 0) {
				this.setState({correct: this.state.currentQuestion.correct})
				clearInterval(this.timer)
				this.nextQuestion()
			} else {
				const updatedTime = this.state.secondsRemaining - 1
				this.setState({secondsRemaining: updatedTime})
			}
		}, 1000)

		this.setState({
			secondsRemaining: SECONDS_LIMIT,
			correct: null,
			incorrect: null
		})
		const next = this.state.questionGenerator.next().value
		this.setState({currentQuestion: next})
	}

	handleAnswer = (answerId) => {
		if (this.state.currentQuestion.correct === answerId) {
			this.props.updateCorrectScore()
			this.setState({incorrect: null})
		} else {
			this.props.updateIncorrectScore()
			this.setState({incorrect: answerId})
		}

		this.setState({correct: this.state.currentQuestion.correct})
		this.nextQuestion()
	}
}

const mapStateToProps = state => {
	return {
		isStarted: state.quiz.isStarted,
		name: state.quiz.name
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateCorrectScore: () => {dispatch(updateCorrectScore())},
		updateIncorrectScore: () => {dispatch(updateIncorrectScore())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
