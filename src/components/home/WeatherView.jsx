import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import getFormattedWeatherData, {iconUrlFromCode} from "../../services/weatherService";
export default function WeatherView() {
    /*
    - secret keys
    */
    // const apiKey = process.env.REACT_APP_WEATHER_API_SECRET_KEY;
    // const apiKey = '895284fb2d2c50a520ea537456963d9c';
    /*
    - variables
    */
    const [query, setQuery] = useState({ q: "doha" });
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);
    const fetchWeather = async () => {
        try {
            let data = await getFormattedWeatherData({ ...query, units })
            console.log(data);
            setWeather(data);
        } catch (ex) {
            console.log(ex);
        }
    };
    useEffect(() => {
        fetchWeather();
    }, [query, units]);
    const formatBackground = () => {
        if (!weather) return "from-cyan-700 to-blue-700";
        const threshold = units === "metric" ? 20 : 60;
        if (weather.main.temp <= threshold) return "from-cyan-700 to-blue-700";
        return "from-yellow-600 to-orange-500";
    };
    // the current day
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    //    get the right weather icon
    const getIcon = () => {
        const { main } = weather.weather[0];
        if (main === 'Clear') {
            return {"icon":faSun,"color":"#FDB813"};
        } else if (main === 'Clouds') {
            return {"icon":faCloud,"color":"#c7c4bf"};
        } else if (main === 'Rain') {
            return {"icon":faCloudRain,"color":"#4e6669"};
        }
    };
    return (
        <div>
            {(weather) ? (
                <div className={`flex flex-col items-center justify-between md:flex-row md:items-start md:justify-between 
            rounded-t-3xl mx-auto max-w-screen-md mt-4 py-4 px-4 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
                    <div className="text-3xl font-bold text-center md:text-left text-white">{day}</div>
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="text-5xl font-bold text-white">

                            <span name="metric" className="hover:scale-125"> {`${weather.main.temp.toFixed()}°`}</span>

                        </div>
                        {/* <img src={iconUrlFromCode(weather.weather[0].icon)} alt="" className="w-20" /> */}
                        <FontAwesomeIcon icon={getIcon().icon} className={`md:ml-4 text-5xl` } color={getIcon().color}/>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0">
                        <div className="text-lg font-bold text-white">{weather.name}, {weather.sys.country}
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-2 text-lg text-white cursor-pointer inline transition ease-out hover:scale-125" />
                        </div>

                    </div>
                </div>) : (null)}
        </div>
    )
}
