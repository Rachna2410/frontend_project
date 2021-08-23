import React from 'react';
import {
    Wrapper,
    Small,
    Loader
} from './Conditions.css'

const conditions = (props) => {
    return (
        <div className="Wrapper">

            {props.error && <small className="Small">Please enter a valid state</small>}

            {props.loading && <div className="Loader" />}


            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div>
            : null
            }
        </div>
    )
}

export default conditions;