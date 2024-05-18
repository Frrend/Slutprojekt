import styles from "../styles/bokaNu.module.scss"
import {motion} from "framer-motion"

/**
 * Bokanu component represents the booking section of the application.
 * It provides information about booking appointments and pricing.
 */
export default function Bokanu() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <motion.h2
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                >Bokning</motion.h2>
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                >Bokning sker genom att ringa på mobiltelefonen. Telefontiderna är mån-fre 8.00-16.00 på telefonnummer
                    0550-80140.</motion.p>
                <motion.hr
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                />
                <motion.h2
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                >Priser</motion.h2>
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                ><b>Nybesök</b> eller besök som kräver ny undersökning
                    Första besöket tar ungefär 40 minuter och innehåller en grundlig undersökning och eventuellt
                    behandling.
                    <b>Återbesök</b>
                    Återbesöket tar ungefär 20 minuter.
                    <br/>
                    <br/>
                    Som legitimerad hälsovård är vi momsbefriade och därför ingår inte moms i våra taxor.
                    <br/>
                    <br/>
                    Vi jobbar som privatvårdsgivare och därför är inte våra priser subventionerade av Landstinget,
                    vilket gör att vi inte heller kan stämpla i Landstingets Frikort.
                    <br/>
                    <br/>
                    Kiropraktisk behandling ingår i vissa privata sjukvårdsförsäkringar. Ta kontakt med ditt
                    försäkringsbolag för detaljer.
                </motion.p>
                <motion.hr
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                />
                <motion.h2
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                >Kiropraktisk behandling är avdragsgill för företag</motion.h2>
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                >Företag har möjlighet till skattefri behandling hos kiropraktor för deras anställda under åtgärden
                    'rehablitering och förebyggande behandling'. Rehabilitering är en individuell åtgärd riktad mot att
                    göra att den anställda kan utföra sina arbetsuppgifter utan problem eller återgå till jobbet så
                    snart som möjligt.
                    <br/>
                    <br/>
                    Kiropraktor behandling räknas inte som enkla friskvård när det gäller avdragsrätt för företag.
                    Däremot är massage avdragsgillt för företag under rubriken friskvård. Vi har en erfaren och duktig
                    massör hos oss på kliniken.</motion.p>
            </article>
        </main>
        {/* Main End */}
    </>)
}

