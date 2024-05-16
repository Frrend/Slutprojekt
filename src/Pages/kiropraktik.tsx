import styles from "../styles/kiropraktik.module.scss";

export default function Home() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <iframe src="https://www.youtube.com/embed/FA-s18_R2-Y?si=orGqCB8L2vxcTmHi"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
            </article>
        </main>
        {/* Main End */}
    </>)
}