import {LinkPath} from "@src/global/link_path.tsx";
import {useNavigate} from "react-router";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {ButtonGroup} from "react-bootstrap";
import PageHeader from "@src/components/layouts/PageHeader.tsx";
import PageFooter from "@src/components/layouts/PageFooter.tsx";
import PageTopBorder from "@src/components/layouts/PageTopBorder.tsx";

function Status404() {
  const navigate = useNavigate();

  return (
    <>
      <PageTopBorder/>
      <PageHeader/>
      <Container fluid className="my-height-100vh">
        <Col className="py-3 my-4 text-center text-body-secondary justify-content-center">
          <h1>404</h1>
          <p>The page you are looking for cannot be found.</p>
          <ButtonGroup>
            <Button className="btn btn-info"
                    onClick={() => {
                      navigate(-1)
                    }}>
              &laquo; 上一页
            </Button>
            <div className="my-margin-r3"></div>
            <a type="button" className="btn btn-info"
               href={LinkPath.Root}>
              去首页 &raquo;
            </a>
          </ButtonGroup>
        </Col>
      </Container>
      <PageFooter/>
    </>
  );
}

export default Status404;