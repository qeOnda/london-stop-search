# London Stop & Search
London Stop & Search is an interactive map that plots all police stop & searches that occurred in 2019. It uses [React](https://reactjs.org/) and [Mapbox](https://www.mapbox.com/).  

In the UK, police officers have the power to conduct stop & searches if they have "reasonable grounds" to suspect that an offence has been committed. To read about your rights in these situations visit this [page](https://www.libertyhumanrights.org.uk/advice_information/stop-and-search/).  

Check it out here: https://london-stop-search-map.netlify.app/

## Data
This project was created at the end of 2020 and uses data from the 2019 calendar year. The reason for this is that we wanted to use pre-COVID data to get a better sense of stop & searches: the hypothesis being that there were less foot traffic and therefore less stops in 2020 due to the pandemic.

Data for this project was downloaded from data.police.uk &mdash; you can find the link [here](https://data.police.uk/data/).  

Please refer to the [notebook](data_clean.ipynb) to see how data was cleaned. 

## Install 
To install on your local environment clone the repo:
```
$ git clone https://github.com/qeOnda/london-stop-search
```
Then install dependencies and run on localhost: 
```
$ cd london-stop-search
$ yarn install
$ yarn start
```
Make sure to save your own Mapbox access token in an env file at `./src/Mapper.js`. 

## Useful Resources
Great examples of how to use React with Mapbox [here](https://github.com/mapbox/mapbox-react-examples) in the official Mapbox repo.










