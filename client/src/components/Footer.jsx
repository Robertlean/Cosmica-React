import React from 'react'
import { Link } from "react-router-dom"

export default function () {
  return (
    <footer>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="single-widget contact-widget" data-aos="fade-up" data-aos-delay="0">
                <h6 className="widget-title">Contactame</h6>
                <div className="media">
                  <i className="fa fa-envelope-o"></i>
                  <div className="media-body ml-3">
                    <h6>¿Ténes alguna pregunta?</h6>
                    <Link to=".tarotcosmica@gmail.com">tarotcosmica@gmail.com</Link>
                  </div>
                </div>
                <div className="media">
                  <i className="fa fa-phone"></i>
                  <div className="media-body ml-3">
                    <h6>Mandáme un whatsapp</h6>
                    <Link to="https://api.whatsapp.com/send?phone=541127782468" className="tel">+54 9 11
                      2778-2468</Link>
                  </div>
                </div>

                <div className="media">
                  <i className="fa fa-facebook"></i>
                  <div className="media-body ml-3">
                    <h6>Encontrame en Facebook</h6>
                    <Link to="https://www.facebook.com/cosmicatarot-114161293570553">como Cosmica
                      Tarot</Link>
                  </div>
                </div>

                <div className="media">
                  <i className="fa fa-instagram"></i>
                  <div className="media-body ml-3">
                    <h6>Encontrame en instagram</h6>
                    <Link to="https://www.instagram.com/cosmica.tarot/">como cosmica.tarot</Link>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="single-widget recent-post-widget" data-aos="fade-up" data-aos-delay="400">
                <h6 className="widget-tiltle">Experiencia de las personas</h6>
                <div className="media">

                  <div className="media-body ml-3">
                    <h6>An engaging</h6>
                    <p><i className="fa fa-user"></i>Mano <i className="fa fa-caret-up"></i> Cancer</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body ml-3">
                    <h6>Statistics and analysis. The key to succes.</h6>
                    <p><i className="fa fa-user"></i>Rosias <i className="fa fa-caret-up"></i> Piscis</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body ml-3">
                    <h6>Envato Meeting turns into a photoshooting.</h6>
                    <p><i className="fa fa-user"></i>Kien <i className="fa fa-caret-up"></i> Tauro</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body ml-3">
                    <h6>An engaging embedded the video posts</h6>
                    <p><i className="fa fa-user"></i>Robert <i className="fa fa-caret-up"></i> Geminis</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body ml-3">
                    <h6>An engaging embedded the video posts</h6>
                    <p><i className="fa fa-user"></i>Daiana <i className="fa fa-caret-up"></i> Leo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="single-widget tags-widget" data-aos="fade-up" data-aos-delay="800">
                <h6 className="widget-tiltle">Tags populares</h6>
                <Link to="#">Cancer</Link>
                <Link to="#">Meme</Link>
                <Link to="#">amor</Link>
                <Link to="#">Piscis</Link>
                <Link to="#">Geminis</Link>
                <Link to="#">marte</Link>
              </div>
              <div className="single-widget subscribe-widget" data-aos="fade-up" data-aos-delay="800">
                <h6 className="widget-tiltle">Suscribite</h6>
                <p>Recibi tu signo mensualmente a tu casilla de correo</p>
                <form className="" method="get">
                  <div className="input-group">
                    <input className="field form-control" name="subscribe" type="email"
                      placeholder="Ingresá tu e-mail" />
                    <span className="input-group-btn">
                      <button type="submit" name="submit-mail"><i
                        className="fa fa-check"></i></button>
                    </span>
                  </div>
                </form>
                <p>Respetamos tu privacidad</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="foot-note">
        <div className="container">
          <div
            className="footer-content text-center text-lg-left d-lg-flex justify-content-between align-items-center">
            <p className="mb-0" data-aos="fade-right" data-aos-offset="0">&copy; 2025 Todos los derechos
              reservados a Cósmica Tarot. Página diseñada por <Link
                to="https://www.linkedin.com/in/roberto-leandro-veintemilla-429a888a/" target="_blank"
                className="fh5-link">Roberto Veintemilla</Link>.</p>

          </div>
        </div>
      </div>

    </footer>
  )
}
