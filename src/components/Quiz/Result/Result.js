import React from 'react'
import styles from './Result.scss'

const result = ({name, score, handleRestart}) => {
	return (
		<div className={styles.result}>
			<h2>Nice job, {name}</h2>
			<h1>You scored {score} points</h1>
			<button onClick={handleRestart}>Start again!</button>
		</div>
	)
}

export default result
