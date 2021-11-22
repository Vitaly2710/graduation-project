import styles from "./Footer.module.css"
import facebook from "./facebook.png"
import twitter from "./twitter.png"
import instagram from "./instagram.png"

export function Footer() {  
    return (
        <footer className = {styles.footer}>
                    <div className = {styles.footerConteiner}>
                        <h2 className = {styles.mainFooter}>
                             Get the Newsletter
                        </h2>
                    </div>
                    <div className = {styles.wrapperInputFooter}>
                        <input className = {styles.inputFooter} type="email" placeholder= "Enter your Email">
                        </input>
                    </div>
                    <h2 className = {styles.stayConn}> 
                        Stay Connected
                    </h2>
                    <div className ={styles.wrapperOfIcons}>
                        <div className = {styles.iconFooter}>
                            <img src = {facebook} alt= "face"></img>
                        </div>
                        <div className = {styles.iconFooter}>
                            <img src = {twitter} alt= "twitter"></img>
                        </div>
                        <div className = {styles.iconFooter}>
                            <img src = {instagram} alt= "insta"></img>
                        </div>
                    </div>
                    <div className = {styles.wrapperEndFooter}>
                        <p className = {styles.textFooter}>About us</p>
                        <p className = {styles.textFooter}>Feedback</p>
                        <p className = {styles.textFooter}>Awards</p>
                        <p className = {styles.textFooter}>Sitemap</p>
                        <p className = {styles.textFooter}>Privacy</p>
                        
                    </div>
                </footer>
    )
}