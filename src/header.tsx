import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";

export function Header() {
    return <>
        {/* Header */}
        <header>
            <div className="socialBar">
                <a href="https://m.facebook.com/people/Kiropraktorkliniken-Kristinehamn/100039718971452/"><FaFacebookSquare/></a>
                <a href="https://linkedin.com"><FaLinkedin/></a>
                <a href="https://twitter.com"><FaTwitterSquare/></a>
            </div>
        </header>
        {/* Header End */}
        {/* Nav */}
        <nav>
            <div className="NavBar">
                <div className="logoDiv">
                    <a href="/"><img src="/logo.png" alt="Logo"/></a>
                </div>
                <div className="navLinks">
                    <a href="/Kiropraktik">Kiropraktik</a>
                    <a href="/omOss">Om oss</a>
                    <a href="/kontakta">Kontakta</a>
                    <a href="/hittaOss">Hitta oss</a>

                    <a href="/src/bokaNu">
                        <div className="bokaDiv">
                            <h3>Boka nu</h3>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
        {/* Nav End*/}
    </>;
}