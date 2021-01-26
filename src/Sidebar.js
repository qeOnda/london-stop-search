import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import logo from './logo.svg'


function Sidebar(props){
	return (		
		<div className="items-center flex flex-col bg-yellow-100 h-full">
			<div className="pt-5">
				<img 
					src={logo} 
					alt="logo" 
					className="w-8 h-8"
				/>
			</div>
			<div className="pt-14 justify-between flex items-center flex-col h-full">
				<div className="text-center flex flex-col">
					<button
						onClick={() => props.toggleAbout()}
						type="button"
						className="mt-2 rounded-md shadow-lg py-1 px-2 bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300 font-mono text-center"		
					>
						About
					</button>
					<button
						onClick={() => props.toggleData()}
						type="button"
						className="mt-6 mt-2 rounded-md shadow-lg py-1 px-2 bg-yellow-100 hover:bg-yellow-200 active:bg-yellow-300 font-mono text-center"		
					>
						Data
					</button>				
				</div>
				<div className="pb-10">
					<a href="https://github.com/qeOnda/london-stop-search" target="_blank">
						<FontAwesomeIcon icon={faGithub} size="2x" className="fill-current text-yellow-500 hover:text-yellow-600 "/>
					</a>	
				</div>
			</div>	
		</div>	
	)
}

export default Sidebar;
