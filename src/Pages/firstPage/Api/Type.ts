export interface Fact {
    temp: number,
    icon: Icon,
    humidity: number,
    wind_speed: number,
    pressure_mm:number,
    feels_like: number
}

export interface Cords {
    lat: number ;
    lon: number
}

export type Icon = string | null

export type Country = string

export interface CapitalInfo {
    latlng: {0: number, 1:number}
}

export interface AltSpellings {
    0: number,
    1: number,
    2: number
}

export interface Flags {
    png: string,
    svg: string
}

export interface Geo {
    country:{id: number, name: string}
}

export interface Forecast {
    forecasts: [{},{},{},{},{},{},{}],
}

export interface NewsDetails {

}



export interface New {
    articles: IRepo[]
}

export interface News { 
    source: object,
    author: null,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
    [key: string]: any
}

// export interface News {
//     url: string;
//     // [key: string]: any;
//   }

export type Url = string
export type Title = string
export type UrlToImage = string


export  interface IRepo {
    [index: number]: News ;
  }