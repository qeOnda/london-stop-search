import React, { useEffect, useState } from 'react';
import Optionsfield from '../components/Optionfield'

function PointsTog(props) {
	const map = props.map
	
	const [current, setCurrent] = useState(props.categories)
	const [selected, setSelected] = useState(null)
	const [filter, setFilter] = useState(["all", ])

	

	useEffect(() => {
		if(map){
			current.forEach((item) => {
				if (item.checked === true && item.name === selected) {
					var setter = filter
					for (let i = 0; i < setter.length; i++) {
						if (setter[i].includes(item.name))
							setter.splice(i, 1);
							map.setFilter('circles', setter)
							setFilter(setter)  	
					}
				} else if (item.checked === false && item.name === selected) {
					setter = filter
					var maker = ["in", item.cat, item.name]
					setter.push(maker)
					map.setFilter('circles', setter)
					setFilter(setter)			
				}
			})
		}
	},)


	const changeState = (i) => {
		const changedStates = [...props.categories]
		let newstate = {...changedStates[i]}
		var select = newstate.name
		changedStates[i].checked = newstate.checked ? false: true;
		setCurrent(changedStates)
		setSelected(select)
	}		

	console.log(filter)	

	return (
		<div>
			<Optionsfield 
				// cat="Age Range"
				changeState={changeState}  
				toggle={props.categories}		
			/>
		</div>
	)
}

export default PointsTog;



// useEffect(() => {
// 	if(map){
// 		current.forEach((item) => {
// 			if (item.checked === true && item.name === selected) {
// 				var setter = filter
// 				for (let i = 0; i < setter.length; i++) {
// 					if (setter[i].includes(item.name))
// 						setter.splice(i, 1);
// 						setFilter(setter)  	
// 				}
// 			} else if (item.checked === false && item.name === selected) {
// 				setter = filter
// 				var maker = ["in", item.cat, item.name]
// 				setter.push(maker)
// 				setFilter(setter)			
// 			}
// 		})
// 	}
// }, [current])


// useEffect(() => {
// 	const paint = () => {
// 		if(map){
// 			current.forEach((item) => {
// 				if (item.checked === true && item.name === selected) {
// 					var setter = filter
// 					for (let i = 0; i < setter.length; i++) {
// 						if (setter[i].includes(item.name))
// 							setter.splice(i, 1);
// 							setFilter(setter)  	
// 					}
// 				} else if (item.checked === false && item.name === selected) {
// 					setter = filter
// 					var maker = ["in", item.cat, item.name]
// 					setter.push(maker)
// 					setFilter(setter)			
// 				}
// 			})
// 		}
// 	}
// 	paint();	
// }, [])
