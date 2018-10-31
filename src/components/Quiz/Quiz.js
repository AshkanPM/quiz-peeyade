import React, { Component } from 'react'
import styles from './Quiz.scss'
import { connect } from 'react-redux'
import { updateCorrectScore, updateIncorrectScore } from '../../actions/quizActions'

import Status from './Status/Status'
import Question from './Question/Question'
import MainMenu from './MainMenu/MainMenu'
import IconButton from '../UI/IconButton/IconButton'
import Modal from '../UI/Modal/Modal'

import * as quizFixtures from '../../fixtures/quiz.json'

class Quiz extends Component {

	render = () => {
		const {isStarted, name, score, updateCorrectScore, updateIncorrectScore} = this.props
		
		return (
			<div className={styles.quiz}>
				<div className={styles.header}>
					<IconButton icon="stop" />
					<Status name={name} />
					<IconButton icon="redo" />
				</div>

				<div className={styles.container}>
					<Question
						question={quizFixtures.quizQuestions[0]}
						handleCorrect={updateCorrectScore}
						handleIncorrect={updateIncorrectScore}
					/>
				</div>

				<Modal show={!isStarted}>
					<MainMenu />
				</Modal>
			</div>
		)
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
		updateIncorrectScore: () => {dispatch(updateIncorrectScore())}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
