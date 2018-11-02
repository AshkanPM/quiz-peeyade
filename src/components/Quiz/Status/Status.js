import React, { Component } from 'react'
import styles from './Status.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const status = ({name}) => {
	return (
		<div className={styles.status}>
			<span className={styles.name}>
				{name === '' ? 'Unknown Player' : name}
			</span>
			<span>
				<span className={styles.time}>8</span>
				<FontAwesomeIcon icon="stopwatch" />
			</span>
		</div>
	)
}

export default status
