function Reset(props) {
	const map = props.map

	const changeState = () => {
		map.setFilter('circles', null)
	} 

	return (
		<div>
			<button onClick={() => changeState()}>Reset</button>
		</div>	
	)
}

export default Reset;