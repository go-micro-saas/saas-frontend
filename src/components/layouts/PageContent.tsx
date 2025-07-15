import '@src/assets/layouts/css/layout.css';
import '@src/assets/layouts/css/page_content.css';
import PageCarousel from "@src/components/layouts/PageCarousel.tsx";
import PageWorkspace from "@src/components/layouts/PageWorkspace.tsx";
import Container from'react-bootstrap/Container';

function PageContent() {
  return (
    <>
      <Container fluid className="my-page-content-container">
        {/*carousel*/}
        <PageCarousel/>
        <PageWorkspace/>
      </Container>
    </>
  )
}

export default PageContent;