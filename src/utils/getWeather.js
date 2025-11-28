const weatherApi = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherInfo = async ({city})=>{
    const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApi}`
        );

        if (!res.ok) throw new Error("Failed to fetch weather data");

        const data = await res.json();
        return data;
}