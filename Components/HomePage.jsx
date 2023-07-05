import Link from "next/link";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <div className="Home">
        <div className="overlay">
          <Container>
            <div className="content">
              <div className="sub-head">Firm Architecture and Design</div>
              <div className="main-head">ARCHITECTURE AND CONSTRUCTIONS</div>
              <Link href="/" className="more">
                Read More
              </Link>
            </div>
            <Row className="cards">
              <Col xs={12} sm={12} md={4} className="card-view">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  class="bi bi-hospital"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5Zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9h-.5Zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25h-.5ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Z" />
                  <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1V1Zm2 14h2v-3H7v3Zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm0-14H6v1h4V1Zm2 7v7h3V8h-3Zm-8 7V8H1v7h3Z" />
                </svg>
                <div className="head">Residential Design</div>
                <div className="desc">
                  This Brooklyn office works at the intersection of
                  architecture, urbanism, and art ... and really likes tautology
                  of its name.
                </div>
                <Link href="/" className="more">
                  Read More
                </Link>
              </Col>
              <Col xs={12} sm={12} md={4} className="card-view">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  class="bi bi-layout-text-window"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z" />
                </svg>
                <div className="head">Office Design</div>
                <div className="desc">
                  This Brooklyn office works at the intersection of
                  architecture, urbanism, and art ... and really likes tautology
                  of its name.
                </div>
                <Link href="/" className="more">
                  Read More
                </Link>
              </Col>
              <Col xs={12} sm={12} md={4} className="card-view">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  class="bi bi-shop"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                </svg>
                <div className="head">Commercial Design</div>
                <div className="desc">
                  This Brooklyn office works at the intersection of
                  architecture, urbanism, and art ... and really likes tautology
                  of its name.
                </div>
                <Link href="/" className="more">
                  Read More
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
