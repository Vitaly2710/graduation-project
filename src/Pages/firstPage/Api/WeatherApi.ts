import { Cords, Fact } from "./Type";

export type Response = { fact: Fact}


export const FetchWeather = async ({lat,lon}:Cords): Promise<Response> => {
    const res = await fetch (`/weather?lat=${lat}&lon=${lon}`);
    const data = await res.json()
    console.log(data)
    return data
}
