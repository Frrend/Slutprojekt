import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import {Link} from "react-router-dom";

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
                    <Link to="/"><img src="/logo.png" alt="Logo"/></Link>
                </div>
                <div className="navLinks">
                    <Link to="/Kiropraktik"><b>Kiropraktik</b></Link>
                    <Link to="/omOss"><b>Om oss</b></Link>
                    <Link to="/kontakta"><b>Kontakta</b></Link>
                    <Link to="/hittaOss"><b>Kontakta</b></Link>

                    <Link to="/bokanu" className="bokaDiv">
                            <h3>Boka nu</h3>
                    </Link>
                </div>
            </div>
        </nav>
        {/* Nav End*/}
    </>;
}