import React from 'react'
import styles from './Answers.scss'

import Answer from './Answer/Answer'

const answers = ({answers, handleAnswer, correct, incorrect, lock}) => {
	return (
		<div className={styles.answers}>
			{answers.map(answer => (
				<Answer
					key={answer.id}
					answer={answer.answer}
					handleAnswer={() => {handleAnswer(answer.id)}}
					correct={answer.id === correct}
					incorrect={answer.id === incorrect}
					lock={lock}
				/>
			))}
		</div>
	)
}

export default answers
