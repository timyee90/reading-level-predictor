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
						rows='200'
						cols='800'
						onChange={(event) => setTextInput(event.target.value)}
						className='input-box'
					/>
				</label>
			</form>
			<button
				onClick={(event) => {
					event.preventDefault()
					if (textInput !== '') {
						let data = { text: textInput }
						axios
							.post('http://localhost:5000/predict', data)
							.then(({ data }) => {
								console.log(data)
								setPrediction(data.prediction)
							})
							.catch((err) => console.log(err))
					} else {
						setPrediction('')
						alert('Please enter reading passage.')
					}
				}}
			>
				Predict
			</button>
		</>
	)
}

export default Form
