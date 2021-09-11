import React, { useState } from 'react'
import axios from 'axios'

const Form = ({ setPrediction }) => {
	const [textInput, setTextInput] = useState('')

	return (
		<>
			<form>
				<label>
					Input Text Here
					<br />
					<textarea
						rows='20'
						cols='50'
						onChange={(event) => setTextInput(event.target.value)}
						className='input-box'
					/>
				</label>
			</form>
			<button
				onClick={(event) => {
					event.preventDefault()
					console.log(textInput)
					let data = { text: textInput }
					axios
						.post('http://localhost:5000/predict', data)
						.then(({ data }) => {
							console.log(data)
							setPrediction(data.prediction)
						})
						.catch((err) => console.log(err))
				}}
			>
				Predict
			</button>
		</>
	)
}

export default Form
