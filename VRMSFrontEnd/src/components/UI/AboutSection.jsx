import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/images/hunter.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to bike rent service</h2>
              <p className="section__description">
              Welcome to our bike rental service! We are a trusted and reliable bike rental company dedicated to providing top-quality vehicles and exceptional customer service. With a strong commitment to customer satisfaction, we strive to make your bike rental experience convenient, affordable, and enjoyable.
              As a bike rental company, we are committed to providing competitive pricing and transparent policies. We believe in upfront and honest pricing, with no hidden fees or surprises. Our goal is to offer affordable rates without compromising on quality, giving you the best value for your money.


              </p>

          
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
