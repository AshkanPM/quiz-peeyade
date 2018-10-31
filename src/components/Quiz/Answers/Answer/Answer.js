import React from 'react'
import styles from './Answer.scss'

const answer = ({answer}) => {
	return (
		<div className={styles.answer}>
			{answer}
		</div>
	)
}

export default answer
