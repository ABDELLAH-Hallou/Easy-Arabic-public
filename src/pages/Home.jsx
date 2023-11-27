import React from 'react';
import TranslateView from '../components/home/TranslateView';
import WeatherView from "../components/home/WeatherView";

export default function Home() {
  return (
    <div className='bg-gray-200 '>
          <TranslateView />
          <WeatherView  />
        </div> 
  )
}
