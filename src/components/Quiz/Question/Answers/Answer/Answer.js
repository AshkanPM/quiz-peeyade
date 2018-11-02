import React from 'react'
import styles from './Answer.scss'

const answer = ({answer, handleAnswer, correct, incorrect, lock}) => {
	let answerStatus = ''
	if (correct) {
		answerStatus = styles.correct
	} else if (incorrect) {
		answerStatus = styles.incorrect
	} else if (lock) {
		answerStatus = styles.lock
	}
	
	const clicked = !lock ? handleAnswer : null;

	return (
		<div
			className={[styles.answer, answerStatus].join(' ')}
			onClick={clicked}>
			{answer}
		</div>
	)
}

export default answer
