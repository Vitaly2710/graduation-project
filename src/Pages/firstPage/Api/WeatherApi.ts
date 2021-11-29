import { Cords, Fact, Forecast, Geo } from "./Type";

export type Response = { fact: Fact,geo_object : Geo, forecasts: Forecast }


export const FetchWeather = async ({lat,lon}:Cords): Promise<Response> => {
    const res = await fetch (`https://forecast-be.herokuapp.com/weather?lat=${lat}&lon=${lon}`);
    const data = await res.json()
    return data
}
