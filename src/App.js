import Test from './Test'
import Mapper from './Mapper'



function App() {
  return (
	    <div className="mapContainer flex flex-col">
			<div className="h-10">
				<Test />
			</div>	
			
			<div className="ml-5 mr-5">
				<Mapper />
			</div>

			<div className="h-20">
				<Test />
			</div>	
		</div>
  );
}

export default App;
