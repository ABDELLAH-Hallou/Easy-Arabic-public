import { DateTime } from "luxon";
import Axios from "axios";
const API_KEY = process.env.WAPI_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//this function gets weather data
const getWeatherData = async (infoType, searchParams) => {
  // create url that contains the base url of the API and type of information we want (ex: weather)
  const url = new URL(BASE_URL + "/" + infoType);
  // add params to the url like the city, country, unit, appid ...etc
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  const response = await Axios.get(url); // call the API using Axios
  return response.data; // return the response
};
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  );
  const { lat, lon } = formattedCurrentWeather.coord;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  });
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
