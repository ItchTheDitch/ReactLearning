import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts';


class WeatherList extends Component {
    renderWeather(cityData){
        const { name } = cityData.city;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const hums = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
    
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
                        <th width="25%">City</th>
                        <th width="25%">Temperature (C)</th>
                        <th width="25%">Preasure (hPa) </th>
                        <th width="25%">Humidity (%) </th>
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