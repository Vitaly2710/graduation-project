export interface Fact {
    temp: number,
    icon: Icon,
    humidity: number,
    wind_speed: number,
    pressure_mm:number
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