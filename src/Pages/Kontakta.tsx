import '../App.css'
import styles from "../styles/kontakta.module.scss"

export default function Kontakta() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <h3>Namn*</h3>
                    <input type="text"/>
                </div>
                <div className={styles.div2}>
                    <h3>E-postadress*</h3>
                    <input type="text"/>
                </div>
                <div className={styles.div3}>
                    <h3>Företag</h3>
                    <input type="text"/>
                </div>
                <div className={styles.div4}>
                    <h3>Telefon</h3>
                    <input type="text"/>
                </div>
                <div className={styles.div5}>
                    <h3>Meddelande*</h3>
                    <input type="text"/>
                </div>
            </div>
        </main>
        {/* Main End */}
    </>)
}
