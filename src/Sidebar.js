import React from 'react'

function Sidebar(props){
	return (
		<div className="bg-red-500 h-full text-center">
			<h1>Hello World!</h1>
			<button
				onClick={() => props.openModal()}
				type="button"
				className="mt-2 bg-white rounded-md shadow-sm py-1 px-2"		
			>
				CLICK
			</button>
		</div>
	)
}

export default Sidebar;
