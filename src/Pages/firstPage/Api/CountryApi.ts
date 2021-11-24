import { AltSpellings, CapitalInfo, Flags } from "./Type"

interface Response {
    capitalInfo: CapitalInfo
    altSpellings: AltSpellings
    flags:Flags
}

// : Promise<Response>

// export const fetchCountry = async (contry:string) => {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${contry}`)
//     console.log(res)
//   } 


  export const fetchCountry = async (country:string): Promise <Response> => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json()
    return data[0]
  }