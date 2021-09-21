import React from 'react'

const DifficultyBar = ({ prediction }) => {
	const difficulty = ((+prediction + 3) / 6) * 100
	const width = `${difficulty}%`

	return (
		<div>
			<div className='difficulty-text'>
				<div>Hard</div>
				<div>Easy</div>
			</div>
			<div className='difficulty-bar'>
				<div className='difficulty-level' style={{ width: width }}>
					{difficulty.toFixed(2)}%
				</div>
			</div>
			<div className='difficulty-text'>
				<div>-3</div>
				<div>-2</div>
				<div>-1</div>
				<div>0</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	)
}

export default DifficultyBar
