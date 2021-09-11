import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Form from './Components/Form'
import Prediction from './Components/Prediction'

const App = () => {
	const [prediction, setPrediction] = useState('')

	return (
		<div className='app'>
			<Form setPrediction={(pred) => setPrediction(pred)} />
			{prediction ? <Prediction prediction={prediction} /> : ''}
		</div>
	)
}

export default hot(App)
