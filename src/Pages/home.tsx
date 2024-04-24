import '../App.css'
import {Link} from "react-router-dom";
import styles from "../styles/home.module.scss"

export default function Home() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <h1>Behandlingar för ett <br/> aktivt liv</h1>
                <br/>
                <h2>Välkommen till Kiropraktorkliniken i Kristinehamn.</h2>
                <br/>
                <br/>
                <h3>Jag är Mark Griffiths, en legitimerad kiropraktor med över 35 års <br/> erfarenhet med ett
                    särskilt intresse för idrott och idrottsskador.</h3>

                <Link to="/bokanu" className="bokaDiv">
                    <h3>Boka nu</h3>
                </Link>
            </article>
        </main>
        {/* Main End */}
    </>)
}
