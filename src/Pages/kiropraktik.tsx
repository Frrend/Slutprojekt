import styles from "../styles/kiropraktik.module.scss";
import {motion} from "framer-motion";

/**
 * Home component represents the home page of the application.
 * It includes a video embedded from YouTube.
 */
export default function Home() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article className={styles.article}>
                <motion.iframe
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: .5}}
                    className={styles.iframe}
                    src="https://www.youtube.com/embed/FA-s18_R2-Y?si=orGqCB8L2vxcTmHi"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
            </article>
        </main>
        {/* Main End */}
    </>)
}
