import TopButtons from "../components/weather/TopButtons";
import Inputs from "../components/weather/Inputs";
import TimeAndLocation from "../components/weather/TimeAndLocation";
import TemperatureAndDetails from "../components/weather/TemperatureAndDetails";
import Forecast from "../components/weather/Forecast";
import getFormattedWeatherData from "../services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Weather() {
  const [query, setQuery] = useState({ q: "doha" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    const message = query.q ? query.q : "current location.";

    // toast.info("Fetching weather for " + message);
    try {
      let data = await getFormattedWeatherData({ ...query, units })
      // toast.success(
      //   `Successfully fetched weather for ${data.name}, ${data.sys.country}.`
      // );
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
  return (
    <div>
        <div
        className={` mx-auto md:max-w-screen-md mt-4 py-5 md:px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >

        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>

            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} timezone={weather.timezone} />
            <Forecast title="daily forecast" items={weather.daily} timezone={weather.timezone} />
          </div>
        )}

        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </div>
    </div>

  );
}