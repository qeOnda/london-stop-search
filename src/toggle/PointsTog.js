import React, { useEffect, useState } from 'react';
import AllDrops from '../components/AllDrops'


function PointsTog(props) {
	const map = props.map
	const [filterer, setFilterer] = useState()
	const categories = props.categories


	const handleChange = e => {
		setFilterer({
			...filterer,
			[e.target.name]: e.target.value
		})
	}

	const handleReset = () => {
		setFilterer()
		map.setFilter('circles', null)
	}

	useEffect(() => {
		if(map){
			if (filterer){
				var f = ["all", ]
				const checker = {...filterer}

				// console.log	(checker)
				for(const [key, value] of Object.entries(checker)) {
					if (value === "All"){
						delete checker[key]						
					} else {
						let i = ["in", key, value]
						f.push(i)
					}
				}	
				map.setFilter('circles', f)
			}
		}
	})
	

	return (
		<div className="pt-10 ">
			<AllDrops
				categories={categories}
				handleChange={handleChange}
				handleReset={handleReset}
			/>
		</div>	
	)
}

export default PointsTog;

