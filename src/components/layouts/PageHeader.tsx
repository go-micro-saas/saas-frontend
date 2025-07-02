import reactLogo from '@src/assets/react.svg'
import '@src/assets/layouts/css/page_header.css';

function PageHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 my-header-navbar">
        <div className="container-fluid">
          <a href="/"
             className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={reactLogo} className="logo" alt="SaaS logo"/>
            <span className="fs-4">SaaS Platform</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav justify-content-lg-center me-auto container">
              <li className="nav-item">
                <a className="nav-link my-header-navbar-a active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link my-header-navbar-a" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link my-header-navbar-a disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="my-companies-bottom"></div>
    </>
  )
}

export default PageHeader;