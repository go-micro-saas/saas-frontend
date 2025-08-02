import React from 'react';
import myLogo from '@src/assets/react.svg'
import myAvatar from '@src/assets/layouts/image/ok.png'
import '@src/assets/layouts/css/layout.css';
import '@src/assets/layouts/css/page_header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {ProjectStore} from "@src/global/store/store_instance.ts";
import {GetCurrentPathAndQuery, LinkPath} from "@src/global/link/link_path.ts";

const PageHeader: React.FC = () => {
  const userInfo = ProjectStore((state) => state.userInfo);
  const loginPath = LinkPath.AuthLogin + "?" + GetCurrentPathAndQuery()

  return (
    <>
      <div className="container-fluid my-header-navbar-container">
        <Navbar expand={"lg"} className="py-2 my-header-navbar-nav">
          <Container fluid>
            {/*brand*/}
            <Navbar.Brand className="d-flex"
                          href="/">
              <img src={myLogo} className="logo" alt="SaaS logo"/>
              <span className="my-margin-x3"></span>
              <span className="fs-4">SaaS Platform</span>
            </Navbar.Brand>
            {/*toggle*/}
            <Navbar.Toggle aria-controls="myNavbarSupportedContent"/>
            {/*navbar*/}
            <Navbar.Collapse id="myNavbarSupportedContent">
              <Nav className="me-auto justify-content-lg-center container-fluid">
                <Nav.Link className="my-header-navbar-a"
                          href={LinkPath.Root}>
                  <i className="icon-home"></i>
                  <span className="my-margin-r3"></span>
                  Home
                </Nav.Link>
                <Nav.Link className="my-header-navbar-a disabled"
                          href="#2">
                  <i className="icon-book"></i>
                  <span className="my-margin-r3"></span>
                  Documents
                </Nav.Link>
                <Nav.Link className="my-header-navbar-a disabled"
                          href="#3">
                  <i className="icon-shopping-cart"></i>
                  <span className="my-margin-r3"></span>
                  Pricing
                </Nav.Link>
                <Nav.Link className="my-header-navbar-a disabled"
                          href="#4">
                  <i className="icon-tasks"></i>
                  <span className="my-margin-r3"></span>
                  Disabled
                </Nav.Link>
              </Nav>
              {/*user*/}
              <Dropdown drop="down-centered" className="d-flex col-sm-2 dropdown justify-content-end">
                {
                  Number(userInfo.uid || "0") < 1 ?
                    <>
                      {/* 游客 - 注册 */}
                      <div className="my-header-navbar-text-avatar text-truncate">游客</div>
                      <span className="my-margin-x3"></span>
                      <a className="btn btn-info my-header-navbar-sign-up link-body-emphasis text-decoration-none"
                         href={loginPath}>
                        <span className="">登录</span>
                      </a>
                    </>
                    :
                    <>
                      {/* 登录 - 用户*/}
                      {
                        userInfo.avatar ?
                          <img src={myAvatar} className="my-header-navbar-img-avatar" alt="Avatar"/> :
                          <div
                            className="my-header-navbar-text-avatar  text-truncate">{userInfo.name || userInfo.uid}</div>
                      }

                      <span className="my-margin-x3"></span>
                      <Dropdown.Toggle variant={"info"}
                                       className="my-header-navbar-sign-in link-body-emphasis text-truncate">
                        <span className="text-truncate">{userInfo.name || userInfo.uid}</span>
                      </Dropdown.Toggle>
                    </>
                }


                <Dropdown.Menu className="dropdown-menu my-header-navbar-dropdown justify-content-end">
                  <Dropdown.Item className="text-truncate disabled"
                                 href="#">
                    <i className="icon-user"></i>
                    <span className="my-margin-r3"></span>
                    成员信息
                  </Dropdown.Item>

                  <hr className="dropdown-divider"/>
                  <Dropdown.Item className="text-truncate disabled"
                                 href="#">
                    <i className="icon-globe icon-spin"></i>
                    <span className="my-margin-r3"></span>
                    个人组织
                  </Dropdown.Item>

                  <hr className="dropdown-divider"/>
                  <Dropdown.Item className="text-truncate disabled"
                                 href="#">
                    <i className="icon-cog icon-spin"></i>
                    <span className="my-margin-r3"></span>
                    管理组织
                  </Dropdown.Item>

                  <hr className="dropdown-divider"/>
                  <Dropdown.Item className="text-truncate disabled"
                                 href="#">
                    <i className="icon-zoom-out"></i>
                    <span className="my-margin-r3"></span>
                    退出登录
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default PageHeader;