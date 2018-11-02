import React from 'react'
import styles from './Answer.scss'

const answer = ({answer, handleAnswer, correct, incorrect}) => {
	const classList = [
		styles.answer,
		correct ? styles.correct : '',
		incorrect ? styles.incorrect : '',
	].join(' ')

	return (
		<div
			className={classList}
			onClick={handleAnswer}>
			{answer}
		</div>
	)
}

export default answer
