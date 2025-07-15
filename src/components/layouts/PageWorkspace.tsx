import '@src/assets/layouts/css/page_content.css';
import firstCarousel from "@src/assets/carousel/image/first.png";
import secondCarousel from "@src/assets/carousel/image/second.png";
import thirdCarousel from "@src/assets/carousel/image/third.png";
import Container from'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PageWorkspace() {
  return (
    <>
      <Container fluid className="my-page-workspace-container">
        <Row>
          {/*col 1*/}
          <Col>
            <Card>
              <Card.Img variant="top" src={firstCarousel} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/*col 2*/}
          <div className="col">
            <div className="card">
              <img src={secondCarousel} className="card-img-top" alt="Card Image"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card’s content.</p>
                <a href="#" className="btn btn-primary">GoSomewhere</a>
              </div>
            </div>
          </div>
          {/*col 3*/}
          <div className="col">
            <div className="card">
              <img src={thirdCarousel} className="card-img-top" alt="Card Image"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card’s content.</p>
                <a href="#" className="btn btn-primary">GoSomewhere</a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default PageWorkspace;