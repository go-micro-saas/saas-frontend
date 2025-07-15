import '@src/assets/layouts/css/page_content.css';
import firstCarousel from "@src/assets/carousel/image/first-1440x360.png";
import secondCarousel from "@src/assets/carousel/image/second-1440x360.png";
import thirdCarousel from "@src/assets/carousel/image/third-1440x360.png";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function PageCarousel() {
  return (
    <Container fluid>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={firstCarousel}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={secondCarousel}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={thirdCarousel}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default PageCarousel;