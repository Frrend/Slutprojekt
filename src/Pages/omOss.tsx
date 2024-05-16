import styles from "../styles/omOss.module.scss";

export default function OmOss() {
    return (<>
        {/* Main */}
        <main className={styles.main}>
            <article>
                <h2>Kiropraktorkliniken</h2>
                <p>Kiropraktorkliniken i Kristinehamn öppnade 1987 på Södra Torget.
                    <br/>
                    <br/>
                    1998 flyttade vi till större lokaler och vår nuvarande klinik på andra sidan av torget på
                    Kungsgatan
                    38.</p>
                <p>Bild från en artikel i NKP 1989 om kiropraktor legitimation tillsammans med kiropraktor Hanne
                    Nielsen.
                    <br/>
                    <br/>
                    Vi fick kiropraktorlegitimation 1989 och 1991 skrev vi vårdavtal med Värmlands Landsting.
                    Avtalet
                    varade fram till 2005 när det avslutades av Landstinget på grund av besparingarna. Vi har avtal
                    med
                    ett antal lokala företag och med flera försäkringsbolag när det gäller privat
                    sjukvårdsförsäkring.
                </p>
                <img src="/omOssPic.jpg" alt=""/>
            </article>
        </main>
        {/* Main End */}
    </>)
}

