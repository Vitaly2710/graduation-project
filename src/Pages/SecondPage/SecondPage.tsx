import { Footer } from "../Components/footer/Footer"
import { Header } from "../Components/Header"
import styles from "./SecondPage.module.css"
import akar from "./img/akar.png"
import {useEffect, useState} from "react"
// import { FetchWeatherfour, FetchWeatherthree, FetchWeathertwo} from "../firstPage/Api/WeatherApi"
import { AltSpellings, CapitalInfo, Fact } from "../firstPage/Api/Type"
import { FetchWeather } from "../firstPage/Api/WeatherApi"
import { fetchCountry } from "../firstPage/Api/CountryApi"
import { useDispatch } from "react-redux"
import { changeLat, changeLon, choiceContry, selectCountry, selectLatitude } from "../../features/counter/counterSlice"
import { useAppSelector } from "../../app/hooks"




interface Props {

}






export const SecondPage: React.FC<Props> = (props) =>{
    const dispatch = useDispatch()

    let Latitude = useAppSelector(selectLatitude);
    let Longtitude = useAppSelector(selectLatitude);
    let Country = useAppSelector(selectCountry);

    // const [time, setTime] = useState<string>('');

    const [factinMoscov, setFactInMoscov] = useState<Fact>()
    const [factinRome, setFactInRome] = useState<Fact>()
    const [factinNewYork, setFactInNewYork] = useState<Fact>()
    const [factInSearch, setFactInSearch] = useState<Fact>()

    // const [stateCountry, setstateCountry] = useState<Country>('Russia')
    const [value,setValue] = useState<string>('')
    const [altSpellings, setaltSpellings] = useState<AltSpellings>()
    const [capitalInfo, setcapitalInfo] = useState<CapitalInfo>()

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

        dispatch(changeLat(Number(capitalInfo?.latlng[0])))

        const getCountry = async () => {
            const {altSpellings,capitalInfo} = await fetchCountry(Country)
                setaltSpellings(altSpellings)
                setcapitalInfo(capitalInfo)
        }
            
    
    const getSearchWeather = async () => {
        const {fact} = await FetchWeather({lat:Latitude,lon:Longtitude})
        setFactInSearch(fact)
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
        getSearchWeather()
        getCountry()
    }, []);

     return (
        <div>
            <div>
                {Country}
                {capitalInfo?.latlng[0]}
                {capitalInfo?.latlng[1]}
                {factInSearch?.temp}
                <div>
                {altSpellings}
                </div>


            </div>
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
                                        Press
                                    </button>
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
            <Footer/>
        </div>
    )
}
