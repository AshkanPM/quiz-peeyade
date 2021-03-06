import React, { Component } from 'react'
import styles from './MainMenu.scss'
import { connect } from 'react-redux'
import { startQuiz } from '../../../actions/quizActions'

class MainMenu extends Component {
	state = {
		name: ''
	}

	constructor (props) {
		super(props)
		this.nameInput = React.createRef()
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.nameInput.current.focus()
		}, 0)
	}

	render = () => {
		return (
			<div className={styles.main_menu}>
				<h1>Hey!</h1>
				<h2>Please tell me your name to start</h2>
				<input
					type="text"
					placeholder="Name"
					value={this.state.name}
					onChange={this.handleChange}
					onKeyDown={(event) => {if (event.keyCode === 13) this.handleSubmit()}}
					ref={this.nameInput}
				/>
				<button onClick={this.handleSubmit}>Let's start!</button>
			</div>
		)
	}

	handleChange = (event) => {
		this.setState({name: event.target.value})
	}

	handleSubmit = () => {
		this.props.startQuiz(this.state.name)
		this.props.handleQuizStart()
	}
}

const mapDispatchToProps = dispatch => {
	return {
		startQuiz: (name) => {dispatch(startQuiz(name))}
	}
}

export default connect(null, mapDispatchToProps)(MainMenu)
