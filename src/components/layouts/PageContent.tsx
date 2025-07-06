import '@src/assets/layouts/css/layout.css';
import '@src/assets/layouts/css/page_content.css';
import PageCarousel from "@src/components/layouts/PageCarousel.tsx";
import PageWorkspace from "@src/components/layouts/PageWorkspace.tsx";

function PageContent() {
  return (
    <>
      <div className="container-fluid my-page-content-container">
        {/*carousel*/}
        <PageCarousel/>
        <PageWorkspace/>
      </div>
    </>
  )
}

export default PageContent;