import React from 'react'

function Reset(props) {
	return (
		<div>
			<input 
				type="reset" 
				onClick={() => props.handleReset()} 
				className="ml-3 rounded-md shadow-sm py-2 px-3 bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300 font-mono" 
			/>
		</div>
	)
}

export default Reset;

// bg-red-500 active:bg-red-700