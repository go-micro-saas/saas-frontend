import '@src/assets/layouts/css/layout.css';
import '@src/assets/layouts/css/page_content.css';
import firstCarousel from '@src/assets/carousel/image/first-1440x360.png';
import secondCarousel from '@src/assets/carousel/image/second-1440x360.png';
import thirdCarousel from '@src/assets/carousel/image/third-1440x360.png';

function PageContent() {
  return (
    <>
      <div className="container-fluid my-page-content-container">
        {/*carousel*/}
        <div className="container-fluid">
          <div id="myCarouselExample" className="carousel carousel-dark my-carousel-container slide">
            <div className="carousel-indicators">
              <button type="button"
                      className="active"
                      data-bs-target="#myCarouselExample"
                      data-bs-slide-to="0"
                      aria-current="true" aria-label="Slide 1">

              </button>
              <button type="button"
                      data-bs-target="#myCarouselExample"
                      data-bs-slide-to="1"
                      aria-label="Slide 2">

              </button>
              <button type="button"
                      data-bs-target="#myCarouselExample"
                      data-bs-slide-to="2"
                      aria-label="Slide 3">

              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={firstCarousel}
                     className="d-block w-100" alt="First"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={secondCarousel}
                     className="d-block w-100" alt="Second"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={thirdCarousel}
                     className="d-block w-100" alt="Third."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarouselExample"
                    data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarouselExample"
                    data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


      </div>
    </>
  )
}

export default PageContent;