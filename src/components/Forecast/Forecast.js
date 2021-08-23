import React, { useState } from 'react';
import Conditions from '../conditions/Conditions';
import {
    textInput,
    Radio,
    Button
} from './Forecast.css';

const Forecast = () => {

    let [state, setState] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

function getForecast(e) {
    e.preventDefault();

    if (state.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    
    setLoading(true);
    
    const uriEncodedState = encodeURIComponent(state);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?unit=${setUnit}&q=${uriEncodedState}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }

        setResponseObj(response);
        setLoading(false);
    })
    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
}

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <center><select
                    className="textInput"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    >
                    <option value = "Select State">Select</option>
        <option value = "Rajasthan">Rajasthan</option>
        <option value = "karnataka">Karnataka</option>
        <option value = "Madhyapradesh">Madhyapradesh</option>
        <option value = "Maharashtra">Maharashtra</option>
        </select></center><br/>
               <center> <label className="Radio">
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className="Radio">
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>

                <button className="Button" type="submit">Get Forecast</button></center>
            </form>
            <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
        </div>
    )
}

export default Forecast;