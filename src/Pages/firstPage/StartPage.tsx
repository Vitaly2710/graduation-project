import React, { useState } from "react"
import { Header } from "../Components/Header"
// import backgroundMainPage from './backgroundMainPage.png'
import styles from "./StartPage.module.css"
import { useEffect, } from "react"
import { FetchWeather } from "./Api/WeatherApi"
import { Fact,  } from "./Api/Type"
// import ReactDOM from "react-dom"
import { Footer } from "../Components/footer/Footer"
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux"
import { changeEmail, changePassword, setGoogleUser } from "../../features/counter/counterSlice"
// import { useQuerry } from "../../app/hooks"





interface Props {

}

export const FirstPage: React.FC<Props> = (props) =>{
    const [factState, setfactState] = useState <Fact>()
    // const [time, setTime] = useState<string>('')
    const dispatch = useDispatch()
    // const query = useQuerry()
    
    
    const getWether = async () => {
        // const lat = query.get('lat');
        // const lon = query.get('lon');
        // if (lat && lon) {
        const {fact} = await FetchWeather(
            // lat: Number(lat),
            // lon: Number(lon),
            {lat:54.88, lon:26.73}
        );
        setfactState(fact)
        
    }

    useEffect(() => {
        getWether()
    }, []);

    let year = new Date().getFullYear();
    let month = new Date().getMonth()
    let day = new Date().getDate()
    
    const onSuccess = (response: any) => {
        dispatch(setGoogleUser(response.profileObj))
        console.log(typeof response);
      }

      const onFailure = (res:unknown) => {
        console.error(res)
      }

      const [email, setEmail] = useState<string>("example@gmail.com")
      const [password, setPassword] = useState<string>('password')


      console.log(password, email)

      const Login = () => {
        setEmail('')
        setPassword('')

        dispatch(changePassword(password))
        dispatch(changeEmail(email))
        dispatch(setGoogleUser("true"))
      }


    
    return (
        <div className = {styles.allOfFerstPage}>
            <Header/>
                <section className={styles.wrapperOfMain}>
                    <div className = {styles.containerMain}>
                       <div className = {styles.wrapperMainWeather}>
                           <div className = {styles.weatherInNaroch}>
                                <div className = {styles.belarus}>
                                    <h1 className={styles.h1}>Belarus</h1>
                                </div>
                                <div className={styles.narochLake}>
                                    <h2 className={styles.h2Main}>Naroch Lake</h2>
                                    </div>
                                <div className = {styles.wrapperOfTime}>
                                    <p className = {styles.time}>{day}:{++month}:{year}</p>
                                </div>
                            </div>
                            <div className = {styles.weatherFact}>
                             {factState?.temp}
                           </div>
                            <div className = {styles.weatherByDays}>
                                <div className = {styles.weatherIcon}>
                                    <img className = {styles.weatherIconFact} 
                                        src= {`https://yastatic.net/weather/i/icons/funky/dark/${factState?.icon}.svg`}
                                         alt = "weather Icon"/>
                                </div>
                            </div>
                       </div>

                       <div className={styles.wrapperAuthentication}>
                            <div className = {styles.containerOfAuthentication}>
                                <div className={styles.wrapperOfForm}>
                                    {/* <button className = {styles.googleAuthent}>
                                       <p className= {styles.google}>  */}
                                       <GoogleLogin clientId="21794638087-vphdu9i5dgeti5g9tdjlvh8t8l538aug.apps.googleusercontent.com"
                                                buttonText="Continue with Google"
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                cookiePolicy={'single_host_origin'} 
                                                className = {styles.continueWithGoogle}/>

                                       {/* </p>
                                    </button> */}
                                    <p className = {styles.or}> or </p>
                                </div>
                                <form className={styles.formEmail}>
                                    <input className = {styles.inputEmail}
                                        type="email" placeholder="Email" 
                                        value = {email}    
                                        onChange = {(t) =>setPassword(t.target.value)}
                                        >

                                    </input>
                                </form>
                                <form className = {styles.forPassword}>
                                <input className = {styles.inputPassword}
                                        type="password" placeholder="Password"
                                        value = {password}     
                                       onChange = {(e) =>setEmail(e.target.value)} >

                                    </input>
                                </form>
                                <div className={styles.wrapperOfButtonLogin}>
                                    <button className={styles.loginButton} onClick = {Login} >
                                        <p className = {styles.login}>Login</p>
                                    </button>
                                </div>
                                <p className= {styles.forgotPass}>
                                    Forgot password?
                                </p>
                                <p className = {styles.createOne}>
                                    <span className={styles.noAcc}>No account?</span> Create one
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className = {styles.partTwo}>
                    <h2 className = {styles.howWe}>
                        How we are?
                    </h2>
                    <div className = {styles.elements}>
                        <div className = {styles.elementPartTwo}>
                            <p className = {styles.textInElement}>
                                Group of experts who provide you with the most recent weather forecast
                            </p>
                        </div>
                        <div className = {styles.elementPartTwo}>
                            <p className = {styles.textInElement}>
                                Volonteers who are worried with the problem of a climate change
                            </p>
                        </div>
                        <div className = {styles.elementPartTwo}>
                            <p className = {styles.textInElement}>
                                 Scientists who will tell you how to help the Planet today
                            </p>
                        </div>
                        <div className = {styles.elementPartTwo}>
                            <p className = {styles.textInElement}>
                                Supervisers who organize local environmental projects every day in more than 50 countries
                            </p>
                        </div>
                    </div>
                    <p className = {styles.find}> 
                        Want to find out more?    
                     </p>
                     <div className = {styles.buttonInPartTwo}>
                         <button className= {styles.buttonPartTwo}>
                             Join us!
                         </button>
                     </div>
                </section>
                <Footer/>
        </div>
    )
}
