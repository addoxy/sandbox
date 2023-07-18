import Sun from "@/utils/icons/Sun";
import LocationInput from "./LocationInput";

async function getWeather(location: string) {
  const currentWeather = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${location}`
  );
  return currentWeather.json();
}

const Weather = async (props: { location: string }) => {
  const currentWeather = await getWeather(props.location.trim());
  const temperature = currentWeather.current.temp_c || " ";
  const region = currentWeather.location.region || " ";
  const country = currentWeather.location.country || " ";

  return (
    <>
      <div className="flex">
        <LocationInput />
        <div className="weather-gradient ml-20 flex h-44 w-96 items-center justify-between rounded-2xl px-10 py-4 shadow-xl">
          <div className="flex flex-col">
            <p className="mb-3 text-5xl text-neutral-700">{temperature}</p>
            <p className="text-sm text-neutral-600">
              {region},{country}
            </p>
          </div>
          <Sun className="h-24 w-24 text-yellow-300" />
        </div>
      </div>
    </>
  );
};

export default Weather;
