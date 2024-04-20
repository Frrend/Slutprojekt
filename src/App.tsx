import './App.css'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function App() {
  return (
    <>
      <header>
        <div className='socialBar'>
          <a href="https://m.facebook.com/people/Kiropraktorkliniken-Kristinehamn/100039718971452/"><FaFacebookSquare /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
          <a href="https://twitter.com"><FaTwitterSquare /></a>
        </div>
      </header>

      <nav>
      <div className='NavBar'>
          <div className="logoDiv">
            <a href="/"><img src="logo.png" alt="Logo" /></a>
          </div>
          <div className="navLinks">
            <a href="/Kiropraktik">Kiropraktik</a>
            <a href="/omOss">Om oss</a>
            <a href="/kontakta">Kontakta</a>
            <a href="/hittaOss">Hitta oss</a>

            <a href="/bokaNu">
              <div className='bokaDiv'>
                <h3>Boka nu</h3>
              </div>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <article>
          <h1>Behandlingar för ett <br /> aktivt liv</h1>
          <br />
          <h2>Välkommen till Kiropraktorkliniken i Kristinehamn.</h2>
          <br />
          <br />
          <h3>Jag är Mark Griffiths, en legitimerad kiropraktor med över 35 års <br /> erfarenhet med ett särskilt intresse för idrott och idrottsskador.</h3>
        </article>
      </main>

      <footer>
      
      </footer>
    </>
  )
}

export default App
