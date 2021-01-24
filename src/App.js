import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Mapper from './Mapper'


function App() {
  	const [show, setShow] = useState(false)

  	const openModal = () => setShow(true)
	const closeModal = () => setShow(false)

  return (
	    <div className="flex flex-row h-full">
			<div className="w-1/12">
				<Sidebar 					
					openModal={openModal}	
					closeModal={closeModal}			
				/>
			</div>
			<div className="w-11/12">
				<Mapper 
					show={show}
					setShow={setShow}
					closeModal={closeModal}			
				/>
			</div>	
		</div>
  );
}

export default App;
