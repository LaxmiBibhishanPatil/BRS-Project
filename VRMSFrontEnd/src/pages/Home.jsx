import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindBikeForm from "../components/UI/FindBikeForm";
import ServicesList from "../components/UI/ServicesList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section>
        <div>
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__bikes-left">
                  <h2>Find your best bike here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindBikeForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      {/* <AboutSection /> */}
      {/* ========== services section ============ */}
      <section >
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      
    </Helmet>
  );
};

export default Home;
