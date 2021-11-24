import { Footer } from "../Components/footer/Footer"
import { Header } from "../Components/Header"
import styles from "./SecondPage.module.css"
import akar from "./img/akar.png"
import {useEffect, useState} from "react"
// import { FetchWeatherfour, FetchWeatherthree, FetchWeathertwo} from "../firstPage/Api/WeatherApi"
import { AltSpellings, CapitalInfo, Fact,  Forecast,  Geo, News, Title, Url, UrlToImage } from "../firstPage/Api/Type"
import { FetchWeather } from "../firstPage/Api/WeatherApi"
import { fetchCountry } from "../firstPage/Api/CountryApi"
import { useDispatch } from "react-redux"
import {  changeLatLon,  choiceContry, selectCountry, selectlatlon } from "../../features/counter/counterSlice"
import { useAppSelector } from "../../app/hooks"
import { YMaps, Map, Placemark, SearchControl, GeolocationControl } from 'react-yandex-maps';
import { fetchNews } from "../firstPage/Api/NewsApi"





interface Props {

}

export const SecondPage: React.FC<Props> = (props) =>{
    const dispatch = useDispatch()
    let Country = useAppSelector(selectCountry);
    let latlon = useAppSelector(selectlatlon)

    const [state,setState] = useState<[number,number]>([55,27])

    // const [time, setTime] = useState<string>('');

    const [factinMoscov, setFactInMoscov] = useState<Fact>()
    const [factinRome, setFactInRome] = useState<Fact>()
    const [factinNewYork, setFactInNewYork] = useState<Fact>()
    const [factInSearch, setFactInSearch] = useState<Fact>()

    // const [stateCountry, setstateCountry] = useState<Country>('Russia')
    const [value,setValue] = useState<string>('')
    const [altSpellings, setaltSpellings] = useState<AltSpellings>()
    const [capitalInfo, setcapitalInfo] = useState<CapitalInfo>()
    // const [flags,setFlags] = useState<Flags>()
    const [geoobject, setGeoobject] = useState<Geo>()
    const [forecasts, setForecasts] = useState<Forecast>()

    const Time = () => {
        let year = new Date().getFullYear();
        let monthh= new Date().getMonth()
        let month = (++monthh)
        let day = new Date().getDate()
        let time = (<p className= {styles.date}>
            Date:{day}.{month}.{year}
        </p>)
        return time
    }


        const getCountry = async () => {
                
            try {
                const {altSpellings,capitalInfo} = await fetchCountry(Country);
                setaltSpellings(altSpellings)
                setcapitalInfo(capitalInfo)
                // setFlags(flags)
                dispatch(changeLatLon([capitalInfo.latlng[0],capitalInfo.latlng[1]]))
            } catch(err) {
                alert('Incorrectly entered country');
            }
        }
            
    
    const getSearchWeather = async () => {
        const {fact,geo_object,forecasts} = await FetchWeather({lat:latlon[0],lon:latlon[1]})
        setFactInSearch(fact)
        setGeoobject(geo_object)
        setForecasts(forecasts)
    }


    const getWeatherMoskov = async () => {
        const {fact} = await FetchWeather({lat:55.75, lon:37.61});
            setFactInMoscov(fact)
    }
    const getWeatherRome = async () => {
        const {fact} = await FetchWeather({lat:41.89, lon:12.48});
        setFactInRome(fact)
    }
    const getWeatherNewYork = async () => {
        const {fact} = await FetchWeather({lat:40.74, lon:-74.02});
        setFactInNewYork(fact)
    }
    useEffect(() => {
        getWeatherMoskov()
        getWeatherRome()
        getWeatherNewYork()
      }, []);

      useEffect(() => {
        getCountry()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [Country])

     useEffect(() => {
        getSearchWeather()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [latlon])


        const PressMap = (event: any) => {

            setState( event.get('coords') )
            let coords = event.get('coords')
            dispatch(changeLatLon([coords[0],coords[1]]))
        }


        const [url,setUrl] = useState<Url>('')
        const [title, setTitle] = useState<Title>('')
        const [urlToImage, setUrlToImage] = useState<UrlToImage>('')

        const getNews = async () => {
            const {url,title,urlToImage} = await fetchNews()
            setUrl(url)
            setTitle(title)
            setUrlToImage(urlToImage)
            console.log(url,title,urlToImage)
        }

    useEffect(() => {
        getNews()
    }, [])
  
     return (
        <YMaps>

        <div>
            <Header/>
            <section>
                <div className={styles.wrapperWeather}>
                    <div className={styles.containerWeather}>
                        <div className = {styles.wrapperWeatherForecast}>
                            <p className={styles.forecast}>Weather Forecast</p>
                            <div className= {styles.chooseCountry}>
                                <p className = {styles.pressCountry}>
                                    Country
                                </p>
                                <div>
                                    <img src ={akar} alt= "^" className ={styles.imgSearch}/>
                                </div>    
                            </div>    
                            <div className = {styles.searchCountry}>
                                <input className = {styles.countrySearch} placeholder="Enter the country name ..." value = {value} 
                                     onChange={(e) => setValue(e.target.value)}
                                >
                                </input>
                                <button className = {styles.searchButton} onClick= {() =>{dispatch(choiceContry(value))}}>
                                        Press to search
                                    </button>
                            </div>
                            
                        </div> 
                        <div className = {styles.wrappersearchWeather}>
                            <div className = {styles.containersearchWeather}>
                                <div className = {styles.elementWithWeather}>
                                    <h2 className = {styles.mainCountryOfthree}>
                                        {geoobject?.country.name}
                                        {/* <img src = {flags?.svg} alt="flag" style = {{width:'40px', margin:"0px 0px 0px 30px",border: "1px solid black", borderRadius:'3px'}}></img> */}
                                    </h2>
                                    <p className = {styles.humidityInThree}>
                                        Humidity: {factInSearch?.humidity}%
                                    </p>
                                    <p className = {styles.wuindspeedInThree}>
                                        Wind speed: {factInSearch?.wind_speed} km/h
                                    </p>
                                    <p className = {styles.pressureInThree}>
                                        Pressure: {factInSearch?.pressure_mm} mm
                                    </p>
                                </div>
                                <div className = {styles.tempInthree}>
                                    <p className = {styles.temppressureInThree}>
                                        {factInSearch?.temp}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className= {styles.wrapperDataTimeH1}>
                            {Time()}
                            <h1 className={styles.h1}> Popular Sities </h1>   
                        </div>


                    <div className = {styles.wrapperthreeElementsWithWeather}>
                        <div className = {styles.threeElementsWithWeather}>
                            <div className = {styles.containerElementsWithWeather}>
                                <div className = {styles.elementWithWeather}>
                                    <h2 className = {styles.mainCountryOfthree}>
                                        Moskov
                                    </h2>
                                    <p className = {styles.humidityInThree}>
                                        Humidity: {factinMoscov?.humidity}%
                                    </p>
                                    <p className = {styles.wuindspeedInThree}>
                                        Wind speed: {factinMoscov?.wind_speed} km/h
                                    </p>
                                    <p className = {styles.pressureInThree}>
                                        Pressure: {factinMoscov?.pressure_mm} mm
                                    </p>
                                </div>
                                <div className = {styles.tempInthree}>
                                    <p className = {styles.temppressureInThree}>
                                        {factinMoscov?.temp}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = {styles.threeElementsWithWeather}>
                            <div className = {styles.containerElementsWithWeather}>
                                <div className = {styles.elementWithWeather}>
                                    <h2 className = {styles.mainCountryOfthree}>
                                        Rome
                                    </h2>
                                    <p className = {styles.humidityInThree}>
                                        Humidity: {factinRome?.humidity}%
                                    </p>
                                    <p className = {styles.windspeedInThree}>
                                        Wind speed: {factinRome?.wind_speed} km/h
                                    </p>   
                                    <p className = {styles.pressureInThree}>
                                        Pressure: {factinRome?.pressure_mm} mm
                                    </p>

                                </div>
                                <div className = {styles.tempInthree}>
                                    <p className = {styles.temppressureInThree}>
                                        {factinRome?.temp}
                                    </p>

                                </div>
                               
                            </div>

                        </div>
                        <div className = {styles.threeElementsWithWeather}>
                            <div className = {styles.containerElementsWithWeather}>
                                <div className = {styles.elementWithWeather}>
                                    <h2 className = {styles.mainCountryOfthree}>
                                        New York
                                    </h2>
                                    <p className = {styles.humidityInThree}>
                                        Humidity: {factinNewYork?.humidity}%
                                    </p>
                                    <p className = {styles.windspeedInThree}>
                                        Wind speed: {factinNewYork?.wind_speed} km/h
                                    </p>
                                    <p className = {styles.pressureInThree}>
                                        Pressure: {factinNewYork?.pressure_mm} mm
                                    </p>

                                </div>
                                <div className = {styles.tempInthree}>
                                    <p className = {styles.temppressureInThree}>
                                        {factinNewYork?.temp}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    </div>
                </div>
            </section> 
            <div className = {styles.map}>
                <h2 className = {styles.mapHeader}>World Map</h2>
             
                 <Map  state={{ center: latlon, zoom: 9 }} 
                    height="600px" 
                    width="100%" 


                    onClick={PressMap} 
                    > 
                    
                    <Placemark geometry={latlon}
                        properties={{
                            iconCaption:`Temperature ${factInSearch?.temp}, Feels like ${factInSearch?.feels_like} `,
                        }}    
                    /> 
                    <SearchControl options={{ float: "right" }} /> 
                    <GeolocationControl options={{ float: "left" }} /> 
                    
                    </Map>
            </div>
            <div className = {styles.wrapperOfNews}>
                <div className = {styles.containerOfNews}>
                    <h2 className = {styles.headOfNews}> Latest News </h2>
                    <div className = {styles.news}>
                        <img src = {urlToImage} alt = "img News" style = {{width: "336px" , borderRadius: "10px"}}/>
                    </div>
                    <div className = {styles.titleNews}>
                        <a href = {url}> {title}</a>
                    </div>
                </div>
            </div>            
            <Footer/>
        </div>
          </YMaps>

    )
}
