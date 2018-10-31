import React, { Component } from 'react'
import styles from './Quiz.scss'

import Status from './Status/Status'
import IconButton from '../UI/IconButton/IconButton'
import Question from './Question/Question'
import Answers from './Answers/Answers'

class Quiz extends Component {

	render = () => {
		return (
			<div className={styles.quiz}>
				<div className={styles.header}>
					<IconButton icon="stop" />
					<Status />
					<IconButton icon="redo" />
				</div>

				<div className={styles.container}>
					<Question
						id="1"
						question="Which of the following is NOT a primitive JavaScript data type?"
					/>

					<Answers />
				</div>

			</div>
		)
	}

}

export default Quiz
