import React from 'react';

import myLogo from '@src/assets/react.svg'
import '@src/assets/layouts/css/layout.css';
import '@src/assets/layouts/css/page_footer.css';
import Container from 'react-bootstrap/Container';
import {LinkPath} from "@src/global/link/link_path.ts";

const PageFooter: React.FC = () => {
  return (
    <>
      <Container fluid className="my-page-footer-container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
            © 2020-2025
            <span className="my-margin-r3"></span>
            <a href="https://github.com/ikaiguang"
               className="text-decoration-none" target="_blank">
              <i className="icon-star"></i>
              <span className="my-margin-r3"></span>
              KayGrand
            </a>
          </p>
          <a href="#"
             className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
             aria-label="SaasPlatform">
            <img src={myLogo} className="logo" alt="SaaS logo"/>
          </a>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href={LinkPath.Root} className="nav-link px-2 text-body-secondary">
                <i className="icon-home"></i>
                <span className="my-margin-r3"></span>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary disabled">
                <i className="icon-tasks"></i>
                <span className="my-margin-r3"></span>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary disabled">
                <i className="icon-shopping-cart"></i>
                <span className="my-margin-r3"></span>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary disabled">
                <i className="icon-question-sign"></i>
                <span className="my-margin-r3"></span>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary disabled">
                <i className="icon-map-marker"></i>
                <span className="my-margin-r3"></span>
                About
              </a>
            </li>
          </ul>
        </footer>
        <p className="text-center text-body-secondary">
          <a href="https://beian.miit.gov.cn/#/Integrated/index"
             className="text-decoration-none"
             target="_blank">
            粤ICP备15052531号-1
          </a>
        </p>
      </Container>
    </>
  )
}

export default PageFooter;