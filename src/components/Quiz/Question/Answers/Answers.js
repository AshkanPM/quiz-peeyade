import React from 'react'
import styles from './Answers.scss'

import Answer from './Answer/Answer'

const answers = ({answers, handleAnswer}) => {
	return (
		<div className={styles.answers}>
			{answers.map(answer => (
				<Answer
					key={answer.id}
					answer={answer.answer}
					handleAnswer={() => {handleAnswer(answer.id)}}
				/>
			))}
		</div>
	)
}

export default answers
