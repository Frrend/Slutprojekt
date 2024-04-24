import styles from "../styles/kiropraktik.module.scss";
import {Link} from "react-router-dom";

export default function Home() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <Link to={""}><p>Välkommen till kiropraktorn</p></Link>
                <hr/>
                <Link to={""}><p>Ischialgi</p></Link>
                <hr/>
                <Link to={""}><p>Ryggsmärtor</p></Link>
                <hr/>
                <Link to={""}><p>Axel- och skuldersmärtor</p></Link>
                <hr/>
                <Link to={""}><p>Nacksmärtor</p></Link>
                <hr/>
                <Link to={""}><p>Yrsel</p></Link>
                <hr/>
                <Link to={""}><p>Migrän</p></Link>
                <hr/>
                <Link to={""}><p>Huvudvärk</p></Link>
            </article>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FA-s18_R2-Y?si=orGqCB8L2vxcTmHi"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
        </main>
        {/* Main End */}
    </>)
}