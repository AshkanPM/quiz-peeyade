import React from 'react'
import styles from './Modal.scss'
import { CSSTransition } from 'react-transition-group';

const modal = ({children, show}) => {

	const transitionNames = {
		appear: styles.show,
		appearActive: styles.show,
		enter: styles.show,
		enterActive: styles.show,
		enterDone: styles.show,
		exit: styles.hide,
		exitActive: styles.hide
	}

	return (
		<CSSTransition in={show} timeout={10000} classNames={transitionNames} appear={show}>
			{state => (
				<div className={styles.modal}>
					{children}
				</div>
			)}
		</CSSTransition>
	)
}

export default modal
