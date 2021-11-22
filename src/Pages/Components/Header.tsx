import styles from "./Header.module.css"
import login from "./login.png"
import Vector from './Vector.png'
import { useAppSelector} from '../../app/hooks';
import { selectGoogleUser, } from "../../features/counter/counterSlice";
// import { useDispatch } from "react-redux";



export function Header() {  
    let google = useAppSelector(selectGoogleUser);

    const user = () => {
        if (google === null) {
            return "Login"
        } else {return (<img src = {google.imageUrl} alt = "login" className = {styles.imgUser}/>)
        }
    }
    return (
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <div className = {styles.wrapSaveEarth}>
                        <span>
                            Save the Earth
                        </span>
                        
                        <div className={styles.wrapperOfEarth}>
                            <div className={styles.earth}>
                                <img src = {Vector} className={styles.earth2} alt="Earth"/>
                            </div>
                            <span className= {styles.globAss}>
                                Global association
                            </span>
                        </div>
                    </div>
                    <div className={styles.wrapperOfcontlog}>   
                        <div className={styles.wrapperContactUs}>
                            <button className = {styles.contactUs}>
                                Contact us
                            </button>
                        </div>
                        <div className={styles.wrapperLoginHeaderGeneral}>
                            <button className = {styles.wrapperLoginHeader} >
                                <div className = {styles.loginHeader}>
                                    {user()}
                                </div>
                                <div className={styles.wrapImglogin}>
                                    <img src={login} className = {styles.imgLogin} alt="login"/>
                                </div>
                            </button>    
                        </div>
                       
                    </div>
                </div>
            </div>    
        </div>
    )
}