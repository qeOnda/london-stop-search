import React, { useEffect, useState } from 'react';
import Optionsfield from '../components/Optionfield'


function PointsTog(props) {
	const [current, setCurrent] = useState(props.cat)
	const map = props.map

	useEffect(() => {
		const paint = () => {
			if(map){
				current.forEach((item) => {
					if (item.checked)  {
						map.setLayoutProperty(item.name, 'visibility', 'none')	
					} else {					
						map.setLayoutProperty(item.name, 'visibility', 'visible')
					}
				})
			}
		}
		paint();		
	}, [current, map])


	const changeState = (i) => {
		const changedStates = [...props.cat]
		let newstate = {...changedStates[i]}
		changedStates[i].checked = newstate.checked ? false: true;
		setCurrent(changedStates)
		console.log(props.current)
	}	


	return (
		<div>
			<Optionsfield 
				// cat="Age Range"
				changeState={changeState}  
				toggle={props.cat}			
			/>
		</div>
	)
}

export default PointsTog;