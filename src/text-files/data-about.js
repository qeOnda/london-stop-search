export const data = (
	<div>
		<p>
			<strong>LONDON STOP & SEARCH</strong> uses data downloaded from data.police.uk which can be found <a className="text-yellow-500 hover:text-yellow-600" href="https://data.police.uk/data/" rel="noreferrer" target="_blank">here</a>. 
		</p>
		<p className="mt-2">
			This project was created at the end of 2020 and uses data from the 2019 calendar year. The reason for this is that we wanted to use pre-COVID data to get a better sense of stop & searches: the hypothesis being that there were less foot traffic and therefore less stops in 2020 due to the pandemic.
		</p>	
		<p className="mt-2">
			Please also note that a number of changes were made to the data.
		</p>	
		<p className="mt-2">
			Firstly, for the sake of brevity we grouped ethnicities according to the five main ethnic groups used in the Census. 
			In other words, subcategories — such as Chinese, Indian or Pakistani — were grouped by their corresponding ethnic grouping, for example "Asian".
			You can find more information on UK Census ethnic grouping <a className="text-yellow-500 hover:text-yellow-600" href="https://www.ethnicity-facts-figures.service.gov.uk/style-guide/ethnic-groups" rel="noreferrer" target="_blank">here</a>. 
		</p>
		<p className="mt-2">
			Secondly, data points that were incomplete were omitted from the dataset. For data cleaning methods please refer to this <a className="text-yellow-500 hover:text-yellow-600" href="https://github.com/qeOnda/london-stop-search/blob/main/data_clean.ipynb" rel="noreferrer" target="_blank">notebook</a>. 
		</p>
		<p className="mt-2">
			You can find the repo with source data <a className="text-yellow-500 hover:text-yellow-600" href="https://github.com/qeOnda/points_json" rel="noreferrer" target="_blank">here</a>.
		</p>	
	</div>
)