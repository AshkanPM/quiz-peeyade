import React from 'react'
import styles from './Answers.scss'

import Answer from './Answer/Answer'

const answers = () => {
	const answers = [
		{id: 1, answer: 'Number'},
		{id: 2, answer: 'Boolean'},
		{id: 3, answer: 'Text'},
		{id: 4, answer: 'Undefined'},
	]

	return (
		<div className={styles.answers}>
			{answers.map(answer => (
				<Answer
					key={answer.id}
					answer={answer.answer}
				/>
			))}
		</div>
	)
}

export default answers
