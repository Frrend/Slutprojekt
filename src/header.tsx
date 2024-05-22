import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

export function Header() {
    return <>
        {/* Header */}
        <header>
            <div className="socialBar">
                <a aria-label={"Facebook link"} href="https://m.facebook.com/people/Kiropraktorkliniken-Kristinehamn/100039718971452/"><FaFacebookSquare/></a>
                <a aria-label={"LinkedIn link"} href="https://linkedin.com"><FaLinkedin/></a>
                <a aria-label={"Twitter link"} href="https://twitter.com"><FaTwitterSquare/></a>
            </div>
        </header>
        {/* Header End */}
        {/* Nav */}
        <nav>
            <div className="NavBar">
                <div className="logoDiv">
                    <Link to="/"><img src="/logo.webp" alt="Logo"/></Link>
                </div>
                <div className="navLinks">
                    <Link to="/Kiropraktik"><b>Kiropraktik</b></Link>
                    <Link to="/omOss"><b>Om oss</b></Link>
                    <Link to="/kontakta"><b>Kontakta</b></Link>

                    <Link to="/bokanu" className="bokaDiv buttonAnimation">
                            <h3>Boka nu</h3>
                    </Link>
                </div>
            </div>
        </nav>
        {/* Nav End*/}
    </>;
}