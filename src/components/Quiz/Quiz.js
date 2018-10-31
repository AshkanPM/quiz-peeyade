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

class Quiz extends Component {
	state = {
		questionGenerator: null,
		currentQuestion: null
	}

	componentDidMount = () => {
		const qG = questionGenerator(quizFixtures.quizQuestions)
		this.setState({questionGenerator: qG})
		setTimeout(() => {
			this.nextQuestion()
		}, 5000)
	}

	render = () => {
		const {isStarted, name, updateCorrectScore, updateIncorrectScore} = this.props
		return (
			<div className={styles.quiz}>
				<div className={styles.header}>
					<IconButton icon="stop" />
					<Status name={name} />
					<IconButton icon="redo" />
				</div>

				<div className={styles.container}>
					<Question
						question={this.state.currentQuestion}
						handleCorrect={updateCorrectScore}
						handleIncorrect={updateIncorrectScore}
					/>
				</div>

				<Modal show={!isStarted}>
					<MainMenu handleQuizStart={this.nextQuestion} />
				</Modal>
			</div>
		)
	}

	nextQuestion = () => {
		const next = this.state.questionGenerator.next().value
		this.setState({currentQuestion: next})
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
