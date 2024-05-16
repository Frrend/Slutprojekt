import '../App.css'
import {Link} from "react-router-dom";
import styles from "../styles/home.module.scss"
import {motion} from "framer-motion"

export default function Home() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <motion.h1
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .5}}

                >Behandlingar för ett <br/> aktivt liv</motion.h1>
                <br/>
                <motion.h2
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .5}}
                >Välkommen till Kiropraktorkliniken i Kristinehamn.</motion.h2>
                <br/>
                <br/>
                <motion.h3
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .5}}
                >Jag är Mark Griffiths, en legitimerad kiropraktor med över 35 års <br/> erfarenhet med ett
                    särskilt intresse för idrott och idrottsskador.</motion.h3>

                <Link to="/bokanu" className="bokaDiv">
                    <h3>Boka nu</h3>
                </Link>
            </article>
        </main>
        {/* Main End */}
    </>)
}
