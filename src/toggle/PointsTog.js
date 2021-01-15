import React, { useEffect, useState } from 'react';
import AllDrops from '../components/AllDrops'
import Reset from './Reset'


function PointsTog(props) {
	const map = props.map
	const [filter, setFilter] = useState()
	const categories = props.categories


	const handleChange = e => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value
		})
	}


	useEffect(() => {
		if(map){
			if (filter){
				var f = ["all", ]
				for(const [key, value] of Object.entries(filter)) {
					let i = ["in", key, value]
					f.push(i)
				}	
				map.setFilter('circles', f)
			}
		}
	})
	
	console.log(filter)


	return (
		<div>
			<div className="pt-10 ">
				<AllDrops
					categories={categories}
					handleChange={handleChange}
				/>
			</div>	
			<div className="pt-5">
				<Reset
					map={map}
				/>
			</div>
		</div>	
	)
}

export default PointsTog;
