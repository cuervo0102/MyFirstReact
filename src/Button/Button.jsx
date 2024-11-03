import styles from './Button.module.css'

function Button(){
    return(
        <div>
            <button className={styles.button}>
                click me
            </button>
        </div>
    )

}

export default Button