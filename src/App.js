import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './component/Header';
import ListApp from './component/ListApp';
import axios from 'axios';

class App extends React.Component{

  state = {
    coords: {
      latitude: 56.484602, 
      longitude: 84.947465,
    },
    data:{

    },
    inputData: ""
  }

  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( (position) =>{
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({coords: newCoords})

        //API Call
        axios.get(`http://api.weatherstack.com/current?access_key=be27bcce9871282f07c1b9f25ee75e7b&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
        
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            precip: res.data.current.precip,
            pressure: res.data.current.pressure,
            humidity: res.data.current.humidity,
            observation_time: res.data.current.observation_time,
            img: res.data.current.weather_icons,
          }

          this.setState({data: weatherData})
        })
      })
    }
    else{
      console.log('Not Supported')
    }
  }

  changeWeather = (event) => {
    event.preventDefault();
    axios.get(`http://api.weatherstack.com/current?access_key=be27bcce9871282f07c1b9f25ee75e7b&query=${this.state.inputData}`).then(res => {
    
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        precip: res.data.current.precip,
        pressure: res.data.current.pressure,
        humidity: res.data.current.humidity,
        observation_time: res.data.current.observation_time,
        img: res.data.current.weather_icons,
      }

      this.setState({data: weatherData})
  })
  }

  change = (value) => {
    this.setState({inputData: value})
  }

  render(){
  return (
    <div className="App">
      <Header changeWeather = {this.changeWeather} weatherData = {this.state.data} changeLocation={this.change}/>
      <ListApp weatherData = {this.state.data}/>
    </div>
  );
  }
}

export default App;
