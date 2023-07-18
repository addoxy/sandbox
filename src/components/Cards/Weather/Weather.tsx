import SunIcon from "@/utils/icons/tsx/SunIcon";
import LocationInput from "./LocationInput";

interface WeatherObject {
  current: {
    temp_c: string;
  };
  location: {
    region: string;
    country: string;
  };
}

async function getWeather(location: string): Promise<WeatherObject> {
  const currentWeather = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${location}`
  );
  return currentWeather.json();
}

const Weather = async (props: { location: string }) => {
  const currentWeather = await getWeather(props.location.trim());

  return (
    <>
      <div className="flex">
        <LocationInput />
        <div className="weather-gradient ml-20 flex h-44 w-96 items-center justify-between rounded-2xl px-10 py-4 shadow-xl">
          <div className="flex flex-col">
            <p className="mb-3 text-5xl text-neutral-700">
              {currentWeather.current.temp_c
                ? currentWeather.current.temp_c
                : ""}
              °C
            </p>
            <p className="text-sm text-neutral-600">
              {currentWeather.location.region
                ? currentWeather.location.region
                : ""}
              ,{" "}
              {currentWeather.location.country
                ? currentWeather.location.country
                : ""}
            </p>
          </div>
          <SunIcon className="h-24 w-24 text-yellow-300" />
        </div>
      </div>
    </>
  );
};

export default Weather;
