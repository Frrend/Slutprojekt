import styles from "../styles/omOss.module.scss";
import {motion} from "framer-motion";

export default function OmOss() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <motion.h2
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                >Kiropraktorkliniken
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}>
                    Kiropraktorkliniken i Kristinehamn öppnade 1987 på Södra Torget.
                    <br/>
                    <br/>
                    1998 flyttade vi till större lokaler och vår nuvarande klinik på andra sidan av torget på
                    Kungsgatan
                    38.
                    <br/>
                    <br/>
                    Bild från en artikel i NKP 1989 om kiropraktor legitimation tillsammans med kiropraktor Hanne
                    Nielsen.
                    <br/>
                    <br/>
                    Vi fick kiropraktorlegitimation 1989 och 1991 skrev vi vårdavtal med Värmlands Landsting.
                    Avtalet
                    varade fram till 2005 när det avslutades av Landstinget på grund av besparingarna. Vi har avtal
                    med
                    ett antal lokala företag och med flera försäkringsbolag när det gäller privat
                    sjukvårdsförsäkring.
                </motion.p>
                <motion.img
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                    src="/omOssPic.webp" alt=""/>
            </article>
        </main>
        {/* Main End */}
    </>)
}

