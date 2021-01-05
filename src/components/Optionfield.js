import React from "react";

const Optionsfield = (props) => {
	const renderOptions = (option, i) => {
		return (
			<label key={i}>
				  <input
			          onClick={() => props.changeState(i)}			          
			          name="toggle"
			          type="checkbox"			          
			        />
				<div>{option.name}</div>						
			</label> 
		)
	};
	return (
		<div>
			<p><b>{props.cat}</b></p>
			<div className="flex flex-auto flex-wrap space-x-2 justify-items-center">
				{props.toggle.map(renderOptions)}
			</div>		
		</div>	
	)
}

export default Optionsfield;
