import React from 'react'
import styles from './Status.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const status = ({name, secondsRemaining}) => {
	return (
		<div className={styles.status}>
			<span className={styles.name}>
				{name === '' ? 'Unknown Player' : name}
			</span>
			<span>
				<span className={styles.time}>{secondsRemaining}</span>
				<FontAwesomeIcon icon="stopwatch" />
			</span>
		</div>
	)
}

export default status
