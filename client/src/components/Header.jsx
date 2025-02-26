import { Link } from "react-router-dom"
import Icon from "../../public/images/cosmicatarot.png"

export default function Header() {
  return (
    <header className="w-100">
      <div className="container">
        <div className="top_header d-none d-sm-flex justify-content-between align-items-center">
          <div className="contact">
            <Link to="tel:+5491151372235" className="tel">
              11 - 5137 22235
            </Link>
            <Link to="robertoveintemilla@gmail.com" target="_blank">
              robertoveintemilla@gmail.com
            </Link>
          </div>
          <nav className="d-flex aic">
            <Link to="/login" className="login">
              Iniciar Sesión
            </Link>
            <ul className="nav social d-none d-md-flex">
              <li>
                <Link to="https://www.facebook.com/cosmicatarot-114161293570553" target="_blank">
                Facebook
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="navbar navbar-expand-md navbar-light">
          <Link to="/" className="navbar-brand">
            <img src={Icon} className="imglogo" alt="Cósimca Tarot" />
          </Link>
          <div className="group d-flex align-items-center">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="login-icon d-sm-none" to="#"><i className="fa fa-user" /></Link>
          </div>
          <Link to="#" className="search-icon d-none d-md-block"><i className="fa fa-search"></i></Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="">Mi blog</Link></li>
              <li className="nav-item"><Link className="nav-link" to="">Horoscopo</Link></li>
              <li className="nav-item"><Link className="nav-link" to="">Sesiones</Link></li>
              <li className="nav-item"><Link className="nav-link" to="">Contactame</Link></li>
            </ul>
            <form action="" className="bg-white search-form" method="get" id="searchform">
              <div className="input-group">
                <input className="field form-control" id="s" name="s" type="text" placeholder="Buscar" />
                <span className="input-group-btn">
                  <input className="submit btn btn-primary" id="searchsubmit" name="submit" type="submit" value="Buscar" />
                </span>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </header>
  )
}
