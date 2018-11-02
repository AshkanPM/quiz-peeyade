import React, { Component } from 'react'
import styles from './Quiz.scss'
import { connect } from 'react-redux'
import { updateCorrectScore, updateIncorrectScore, restartQuiz } from '../../actions/quizActions'
import questionGenerator from '../../helpers/questionGenerator'

import Status from './Status/Status'
import Question from './Question/Question'
import MainMenu from './MainMenu/MainMenu'
import Result from './Result/Result'
import IconButton from '../UI/IconButton/IconButton'
import Modal from '../UI/Modal/Modal'

import * as quizFixtures from '../../fixtures/quiz.json'

const SECONDS_LIMIT = 8 // Time per each question in seconds
const DISPLAY_TIMEOUT = 1500 // Wait in milliseconds before next question

const initialState = {
	questionGenerator: null,
	currentQuestion: null,
	secondsRemaining: SECONDS_LIMIT,
	correct: null,
	incorrect: null,
	lock: false,
	pause: false,
	finished: false
}

class Quiz extends Component {
	state = initialState

	componentDidMount = () => {
		const qG = questionGenerator(quizFixtures.quizQuestions)
		this.setState({questionGenerator: qG})
	}

	render = () => {
		const {isStarted, name, score} = this.props

		return (
			<div className={styles.quiz}>
				<div className={styles.header}>
					<IconButton icon={this.state.pause ? 'play' : 'pause'} onClick={this.pauseQuiz} />
					<Status name={name} secondsRemaining={this.state.secondsRemaining} />
					<IconButton icon="redo" onClick={this.restartQuiz} />
				</div>

				<div className={styles.container}>
					<Question
						question={this.state.currentQuestion}
						handleAnswer={this.handleAnswer}
						correct={this.state.correct}
						incorrect={this.state.incorrect}
						lock={this.state.lock}
					/>
				</div>

				<Modal show={!isStarted}>
					<MainMenu handleQuizStart={this.nextQuestion} />
				</Modal>
				<Modal show={this.state.finished}>
					<Result
						name={name}
						score={score}
						handleRestart={this.restartQuiz}
					/>
				</Modal>
			</div>
		)
	}

	nextQuestion = () => {
		this.timer = setInterval(() => {
			if (!this.state.pause) {
				if (this.state.secondsRemaining <= 0) {
					this.props.updateIncorrectScore()
					this.setState({correct: this.state.currentQuestion.correct, lock: true})
					clearInterval(this.timer)
					setTimeout(this.nextQuestion, DISPLAY_TIMEOUT)
				} else {
					const updatedTime = this.state.secondsRemaining - 1
					this.setState({secondsRemaining: updatedTime})
				}
			}
		}, 1000)

		this.setState({
			secondsRemaining: SECONDS_LIMIT,
			correct: null,
			incorrect: null,
			lock: false
		})
		const next = this.state.questionGenerator.next().value
		this.setState({currentQuestion: next})

		if (next === null) {
			clearInterval(this.timer)
			this.setState({finished: true})
		}
	}

	handleAnswer = (answerId) => {
		if (this.state.currentQuestion.correct === answerId) {
			this.props.updateCorrectScore()
			this.setState({incorrect: null})
		} else {
			this.props.updateIncorrectScore()
			this.setState({incorrect: answerId})
		}

		this.setState({correct: this.state.currentQuestion.correct, lock: true})
		clearInterval(this.timer)
		setTimeout(this.nextQuestion, DISPLAY_TIMEOUT)
	}

	restartQuiz = () => {
		this.setState(initialState)
		const qG = questionGenerator(quizFixtures.quizQuestions)
		this.setState({questionGenerator: qG})
		clearInterval(this.timer)
		this.props.restartQuiz()
	}

	pauseQuiz = () => {
		this.setState({pause: !this.state.pause}, () => {
			this.setState({lock: this.state.pause})
		})
	}
}

const mapStateToProps = state => {
	return {
		isStarted: state.quiz.isStarted,
		name: state.quiz.name,
		score: state.quiz.score
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateCorrectScore: () => {dispatch(updateCorrectScore())},
		updateIncorrectScore: () => {dispatch(updateIncorrectScore())},
		restartQuiz: () => {dispatch(restartQuiz())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
