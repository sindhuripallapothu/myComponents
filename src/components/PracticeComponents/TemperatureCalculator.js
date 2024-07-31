// Lifting state up to a common ancestor
import React, { useState } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
const TemperatureInput = (props) => {
    const { scale, temperature } = props;
    const handleChange = (e) => {
        props.handleTempChange(e.target.value, scale)
    }
    return (
        <div>
            <label>Enter the temperature in {scaleNames[scale]}</label>
            <input
                type='number'
                value={temperature}
                onChange={handleChange}
            />
        </div>
    )
}

const BoilerVerdict = ({ temperature }) => {
    const isBoilling = temperature >= 100
    return (
        <div>
           <h1>The water is {isBoilling ? "" : "not"} boiling.</h1>
        </div>
    )
}

const TemperatureCalculator = () => {
    const initialValue = {
        scale: 'c',
        temperature: ""
    }
    const [state, setState] = useState(initialValue)
    
    const handleTempChangeCelsius = (temperature) => {
        setState({ scale: 'c', temperature })
    };
    const handleTempChangeFahrenheit = (temperature) => {
        setState({ scale: 'f', temperature })
    };

    const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
    const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

    const tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    };

    const celsius = state.scale === 'f' ? tryConvert(state.temperature, toCelsius) : state.temperature;
    const fahrenheit = state.scale === 'c' ? tryConvert(state.temperature, toFahrenheit) : state.temperature;


    return (
        <div>
            <TemperatureInput temperature={celsius} scale='c' handleTempChange={handleTempChangeCelsius} />
            <TemperatureInput temperature={fahrenheit} scale='f' handleTempChange={handleTempChangeFahrenheit} />

            <BoilerVerdict temperature={parseFloat(celsius)} />
        </div>
    )
}

export default TemperatureCalculator;