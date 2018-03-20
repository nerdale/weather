import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE
} from './../../../constant/weathers';
import './styles.css';

const StateToIconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return 'cloud';
    case CLOUDY:
      return 'cloudy';
    case SUN:
      return 'day-sunny';
    case RAIN:
      return 'rain';
    case SNOW:
      return 'snow';
    case WINDY:
      return 'windy';
    case THUNDER:
      return 'day-thunderstorm';
    case DRIZZLE:
      return 'day-showers';
    default:
      return 'day-sunny';
  }
}

const getWeatherIcon = (weatherState) => {
  return (
    <WeatherIcons className='wicon' name = {StateToIconName(weatherState)} size = "4x" />
  )
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
      {getWeatherIcon(weatherState)}
      <span className='temperature'>{`${temperature}`}</span>
      <span className='temperaturetype'>º C</span>
    </div>
  )

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;



