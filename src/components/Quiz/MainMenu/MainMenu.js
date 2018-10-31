import React from 'react'
import styles from './MainMenu.scss'

const mainMenu = () => {
	return (
		<div className={styles.main_menu}>
			<h1>Hey!</h1>
			<h2>Please tell me your name to start</h2>
			<input type="text" placeholder="Name"/>
			<button>Let's start!</button>
		</div>
	)
}

export default mainMenu
