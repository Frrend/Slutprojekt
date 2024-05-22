import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useState} from "react";

/**
 * Header component represents the header section of the application.
 * It includes social media links, navigation links, and a responsive sidebar menu.
 */
export function Header() {
    const [open, setOpen] = useState(false);

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

        {open && <style> {`
        body {
        overflow-y: hidden;
        }
        `} </style>}
        <div className={"sideBar" + (open ? " open" : "")}>
            <Link to="/Kiropraktik"><b>Kiropraktik</b></Link>
            <Link to="/omOss"><b>Om oss</b></Link>
            <Link to="/kontakta"><b>Kontakta</b></Link>

        </div>

        {/* Nav */}
        <nav>
            <div className="NavBar">
                <div className="logoDiv">
                    <Link to="/"><img src="/logo.webp" alt="Company_logo"/></Link>
                </div>

                <div className="nav-iconDiv" onClick={() => setOpen(!open)}>
                    <div className={"nav-icon" + (open ? " open" : "")}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
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
