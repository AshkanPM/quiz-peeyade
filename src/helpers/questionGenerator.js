const questionGenerator = function * (questions) {
	for (let question of questions) {
		const id = questions.indexOf(question) + 1
		yield({...question, id: id})
	}
}

export default questionGenerator
