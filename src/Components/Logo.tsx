import styles from "../styles/Nav.module.css"

type LogoProps = {
    ftSize :string
}

export default function Logo({ftSize = '24px'}:LogoProps ){
    
    return(
            <h1 className={styles.logo} style={{fontSize: ftSize}}> Foodieland <span>.</span></h1>
    )
}
