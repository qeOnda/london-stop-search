import React from 'react'
import '../index.css'


function Modal(props) {
	return (
		<div className={props.show ? "modal": "hide"}>
			<button 
				onClick={props.toggler}
				className="absolute top-0 right-0 h-10 w-10 hover:bg-yellow-500 active:bg-yellow-600 text-center text-xl"
			>
				X
			</button>
			<div className="pt-10 pl-3 font-mono">
				{props.text}
			</div>					
		</div>
	)
}

export default Modal