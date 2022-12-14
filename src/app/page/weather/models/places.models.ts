
export interface Place {
    lat:number
    lon:number
    name: string
    country:string
    state?: string;
}

export interface MapWeather{
    id:string,
    value:number,
    name:string,
    unit: string
}

export interface TypeTemperature {
    label: string,
    name: string,
    select:boolean,
    units: EnumTypeTemperature
}

export interface PlaceWeather {
    cod?:     string;
    message?: number;
    cnt?:     number;
    list?:    List[];
    city?:    City;
    name?:    string;
    founded?: number;
    members?: string[];
}

export interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface List {
    dt:         number;
    main:       Main;
    weather:    Weather[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    sys:        Sys;
    dt_txt:     Date;
}

export interface Clouds {
    all: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}

export interface Sys {
    pod: string;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}

export interface Album {
    name:   string;
    artist: Artist;
    tracks: Track[];
}

export interface Artist {
    name:    string;
    founded: number;
    members: string[];
}

export interface Track {
    name:     string;
    duration: number;
}

export enum EnumTypeTemperature{
    Standard='standard',
    Metric='metric',
    Imperial = 'imperial'
}



export interface TodayWeather {
    coord?:      Coord;
    weather?:    Weather[];
    base?:       string;
    main?:       Main;
    visibility?: number;
    wind?:       Wind;
    clouds?:     Clouds;
    dt?:         number;
    sys?:        SysCurrent;
    timezone?:   number;
    id?:         number;
    name?:        string;
    cod?:        number;
    founded?:    number;
    members?:    string[];
}

export interface SysCurrent {
    type:    number;
    id:      number;
    message: number;
    country: string;
    sunrise: number;
    sunset:  number;
}
