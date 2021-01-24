import React from 'react'
import '../index.css'


function Modal(props) {
	return (
		<div className={props.show ? "modal": "hide"}>
			<button 
				onClick={props.closeModal}
				className="pt-1 pr-1 absolute top-0 right-0"
			>
				X
			</button>
			<div className="pt-5 pl-3">
				<p>HELLO WORLD</p>
			</div>	
		</div>
	)
}

export default Modal