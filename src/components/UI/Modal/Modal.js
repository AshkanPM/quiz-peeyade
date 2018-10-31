import React from 'react'
import styles from './Modal.scss'

const modal = ({children}) => {
	return (
		<div className={styles.modal}>
			{children}
		</div>
	)
}

export default modal
