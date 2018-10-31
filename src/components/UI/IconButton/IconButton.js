import React from 'react'
import styles from './IconButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconButton = ({icon, onClick}) => {
	return (
		<a className={styles.icon_button} onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</a>
	)
}

export default iconButton
