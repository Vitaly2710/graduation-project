import { AltSpellings, CapitalInfo } from "./Type"

interface Response {
    capitalInfo: CapitalInfo
    altSpellings: AltSpellings
}

// : Promise<Response>

// export const fetchCountry = async (contry:string) => {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${contry}`)
//     console.log(res)
//   } 


  export const fetchCountry = async (country:string): Promise <Response> => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json()
    console.log(data[0])
    return data[0]
  }