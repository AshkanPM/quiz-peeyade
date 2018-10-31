import React, { Component } from 'react'
import { fontAwesomeInit } from '../../helpers/FontAwesomeHelper'

import Quiz from '../Quiz/Quiz'

class App extends Component {
    render() {
		fontAwesomeInit()

        return <Quiz />
    }
}

export default App
