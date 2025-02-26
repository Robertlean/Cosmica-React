import { Link } from "react-router-dom"
export default function HomePage() {
  return (
    <div className="bodybg">
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-md-1 col-md-11">
              <div className="swiper-container hero-slider">
                <div>
                  <div className="swiper-slide slide-content d-flex align-items-center">
                    <div className="single-slide">
                      <h1 data-aos="fade-right" data-aos-delay="200">Cósmica</h1>
                      <p data-aos="fade-right" data-aos-delay="600">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Culpa delectus provident vitae non ab labore,
                        nam asperiores repellendus at rerum repudiandae atque soluta. Assumenda quos
                        excepturi saepe dolorum, architecto repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="texture"></div>
        <div className="diag-bg"></div>
      </section>

      <section className="cta" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>RESERVA TU TURNO EXCLUSIVO</h2>
              <p>Habla con la tarotista y quitate todas tu dudas</p>
            </div>
            <div className="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
              <Link to="service#price" className="btn btn-primary">reserva ya</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>HOROSCOPO</h2>
              <p>Buscá tu horoscopo y enteraté como te irá en el mes</p>
            </div>
            <div className="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
              <Link to="/horoscope" className="btn btn-primary">Horoscopo</Link>
            </div>

          </div>
        </div>
      </section>

      <section className="cta" data-aos="fade-up" data-aos-delay="0">
        <div className="container">
          <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
            <div className="content" data-aos="fade-right" data-aos-delay="200">
              <h2>Ingresá</h2>
              <p>Obtene tu horoscopo al instante</p>
            </div>
            <div className="subscribe-btn" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
              <Link to="/register" className="btn btn-primary">Ingresá</Link>
            </div>

          </div>
        </div>
      </section>

    </div>

  )
}