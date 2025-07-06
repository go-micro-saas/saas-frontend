import '@src/assets/layouts/css/page_content.css';
import firstCarousel from "@src/assets/carousel/image/first.png";
import secondCarousel from "@src/assets/carousel/image/second.png";
import thirdCarousel from "@src/assets/carousel/image/third.png";

function PageWorkspace() {
  return (
    <>
      <div className="container-fluid my-page-workspace-container">
        <div className="row">
          {/*col 1*/}
          <div className="col">
            <div className="card">
              <img src={firstCarousel} className="card-img-top" alt="Card Image"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card’s content.</p>
                <a href="#" className="btn btn-primary">GoSomewhere</a>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
}

export default PageWorkspace;