import React from 'react'

const question = ({id, question}) => {
	return (
		<React.Fragment>
			<span className="hint">
				Question {id}
			</span>
			<h2>{question}</h2>
		</React.Fragment>
	)
}

export default question
