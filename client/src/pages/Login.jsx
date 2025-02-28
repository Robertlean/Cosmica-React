import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <section className="hero">

        <div className="texture"></div>
        <div className="diag-bg"></div>
      </section>
      <section className="ingreso recent-posts">
        <div className="container">
          <div className="title text-center">
            <h1 className="title-blue">Iniciar sesión</h1>
          </div>
          <div className="cta-content">
            <div className="container">
              <div className="d-md-flex align-items-center justify-content-around text-center text-xl-left flexd" >
                <img src="/images/cosmicatarot2.png" alt="logo" className="logo" />
                <form method="POST" action="/usuarios/login">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Nick o e-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="nombre" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" name="pass" />
                  </div>
                  <span>¿Te olviste la contraseña? Formateala desde el mail</span>
                  <div className="d-flex justify-content-center">
                    <div className="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                      <Link to="login" className="btn btn-primary">Inicia sesión</Link>
                      <Link to="/register" className="btn btn-primary">registrate</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
