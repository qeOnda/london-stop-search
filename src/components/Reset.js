import React from 'react'

function Reset(props) {
	return (
		<div>
			<input 
				type="reset" 
				onClick={() => props.handleReset()} 
				className="ml-3 bg-red-500 active:bg-red-700 rounded-md shadow-sm py-2 px-3"
			/>
		</div>
	)
}

export default Reset;