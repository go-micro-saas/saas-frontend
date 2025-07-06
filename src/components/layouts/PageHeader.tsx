import myLogo from '@src/assets/react.svg'
import myAvatar from '@src/assets/layouts/image/ok.png'
import '@src/assets/layouts/css/layout.css';
import '@src/assets/layouts/css/page_header.css';
import '@src/assets/icons/css/icon.css'

function PageHeader() {
  return (
    <>
      <div className="container-fluid my-header-navbar-container">
        <nav className="navbar navbar-expand-lg py-2 my-header-navbar-nav">
          <div className="container-fluid">
            {/*导航栏 左侧*/}
            <a href="/"
               className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <img src={myLogo} className="logo" alt="SaaS logo"/>
              <span className="my-margin-x3"></span>
              <span className="fs-4">SaaS Platform</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#myNavbarSupportedContent" aria-controls="myNavbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbarSupportedContent">
              {/*导航栏 菜单*/}
              <ul className="nav navbar-nav justify-content-lg-center me-auto container">
                <li className="nav-item my-header-navbar-li">
                  <a className="nav-link my-header-navbar-a active" aria-current="page" href="#">
                    <i className="icon-home"></i>
                    <span className="my-margin-r3"></span>
                    Home
                  </a>
                </li>
                <li className="nav-item my-header-navbar-li">
                  <a className="nav-link my-header-navbar-a disabled" href="#">
                    <i className="icon-book"></i>
                    <span className="my-margin-r3"></span>
                    Documents
                  </a>
                </li>
                <li className="nav-item my-header-navbar-li">
                  <a className="nav-link my-header-navbar-a disabled" aria-disabled="true">
                    <i className="icon-shopping-cart"></i>
                    <span className="my-margin-r3"></span>
                    Pricing
                  </a>
                </li>
                <li className="nav-item my-header-navbar-li">
                  <a className="nav-link my-header-navbar-a disabled" aria-disabled="true">
                    <i className="icon-tasks"></i>
                    <span className="my-margin-r3"></span>
                    Disabled
                  </a>
                </li>
              </ul>

              {/*导航栏 右侧*/}
              <div className="d-flex col-sm dropdown">
                {/* 游客 - 注册 */}
                {/*<div className="my-header-navbar-text-avatar">游客</div>*/}
                {/*<span className="my-margin-x3"></span>*/}
                {/*<a href="#"*/}
                {/*   className="my-header-navbar-sign-up btn btn-info link-body-emphasis text-decoration-none">*/}
                {/*  <span className="">注册</span>*/}
                {/*</a>*/}

                {/* 登录 - 用户*/}
                <a href="#"
                   className="dropdown-toggle my-header-navbar-sign-in link-body-emphasis text-decoration-none"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={myAvatar} className="my-header-navbar-img-avatar" alt="Avatar"/>
                  <span className="my-margin-x3"></span>
                  <span className="">Guide</span>
                </a>
                <ul className="dropdown-menu my-header-navbar-dropdown">

                  <li>
                    <a className="dropdown-item text-truncate disabled" href="#">
                      <i className="icon-user"></i>
                      <span className="my-margin-r3"></span>
                      成员信息
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li>
                    <a className="dropdown-item text-truncate disabled" href="#">
                      <i className="icon-globe icon-spin"></i>
                      <span className="my-margin-r3"></span>
                      个人组织
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li>
                    <a className="dropdown-item text-truncate disabled" href="#">
                      <i className="icon-cog icon-spin"></i>
                      <span className="my-margin-r3"></span>
                      管理组织
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default PageHeader;