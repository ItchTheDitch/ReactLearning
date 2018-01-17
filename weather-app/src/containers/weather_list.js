import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from '../components/google_map'


class WeatherList extends Component {
    renderWeather(cityData){
        const { name } = cityData.city;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const hums = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat }= cityData.city.coord;
       

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="aqua" units="C" /></td>
                <td> <Chart data={pressures} color="firebrick" units="hPa"/></td>
                <td> <Chart data={hums} color="greenyellow" units="%" /> </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Preasure (hPa) </th>
                        <th>Humidity (%) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) { // const weather = state.weather

            //state.weather is from reducer (index.js)
    return { weather } // === { weather : weather }
}


export default connect(mapStateToProps)(WeatherList);