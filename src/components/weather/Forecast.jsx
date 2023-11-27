import React from "react";
import { formatToLocalTime,iconUrlFromCode } from "../../services/weatherService";

function Forecast({ title, items, timezone}) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">

        {items.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{(title==="hourly forecast")?formatToLocalTime(item.dt, timezone, "hh:mm a"):formatToLocalTime(item.dt, timezone, "ccc")}</p>
            <img
              src={iconUrlFromCode(item.weather[0].icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{(title==="hourly forecast")?`${item.temp.toFixed()}°`:`${item.temp.day.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;