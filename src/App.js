import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Form from './Components/Form'
import Prediction from './Components/Prediction'
import DifficultyBar from './Components/DifficultyBar'

const App = () => {
	const [prediction, setPrediction] = useState('')

	return (
		<div className='app'>
			<Form setPrediction={(pred) => setPrediction(pred)} />
			{prediction ? <DifficultyBar prediction={prediction} /> : ''}
			{prediction ? <Prediction prediction={prediction} /> : ''}
		</div>
	)
}

export default hot(App)
