import React, {Component} from 'react';

class About extends Component {
	constructor(props){
		super(props)
		this.state={
				zipCode:'',
				weather:''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
    this.setState({zipCode: e.target.value}, () => {
    console.log('zipcode', this.state.zipCode);

    	})
	}
	handleSubmit(e){
		e.preventDefault(e);
		var base = this
		let zipCode = this.state.zipCode;
  		let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode +',us&appid=052f26926ae9784c2d677ca7bc5dec98'
  		fetch(weatherApi)
  		.then((response) =>{
  			return response.json()
  		}).then((json) => {
  			var weatherInfo={};
  			weatherInfo['city'] = json.name;
  			weatherInfo['temp'] = json.main.temp;
  			weatherInfo['icon'] = 'http://openweathermap.org/img/w/'+json.weather[0].icon+'.png';
  			weatherInfo['description'] = json.weather[0].description;

  			base.setState({ weather: weatherInfo});
    		console.log('weather state', this.state.weather);
    		console.log('weatherInfo is', weatherInfo);
  		}).catch((ex) => {
  			console.log('an error occured while parsing!' ,ex);
  		})
  	}	

  	render () {
  		let weather = this.state.weather;
  		let fehrenheit =  weather.temp * (9/5)-459.67;
  		let celcius = weather.temp - 273.15;
    	return (
    		<div>
      			<header className="Post-header">About me: </header>
       			<h3>This is the weather in {weather.city}</h3>
       			<div className='well well-sm'>
      				<p>fehrenheit { fehrenheit }</p>
      				<p>celcius { celcius }</p>
      				<img src= {weather.icon } />
      				<p> { weather.description } </p>
        		</div>
       			<form onSubmit={ this.handleSubmit }>
        			<label>
          				Please enter your zip code for the weather:
          				<input type="text" onChange={this.handleChange} />
        			</label>
        		<input type="submit" value="Get my forecast!" />
      			</form>
       		</div>
    	)
	}
}

export default About;
