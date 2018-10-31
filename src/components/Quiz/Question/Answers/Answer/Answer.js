import React from 'react'
import styles from './Answer.scss'

const answer = ({answer, handleAnswer}) => {
	return (
		<div className={styles.answer} onClick={handleAnswer}>
			{answer}
		</div>
	)
}

export default answer
