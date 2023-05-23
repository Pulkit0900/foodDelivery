import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
          <div className="logo footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Food Eazy</h5><br></br>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h4 className="footer__title"> Delivery Time</h4>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Sunday - Thursday </span>
                <p> 10:00am - 11:00pm </p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Friday - Saturday </span>
                <p> Off Day </p>
              </ListGroupItem>

            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h4 className="footer__title"> Contact </h4>
            <ListGroup className="deliver_time-list">
              
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p> Location: ZindaBazar, Sylhet-3100, Uttar-Pradesh </p>
              </ListGroupItem>
              
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Phone: 01712345678 </span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Email: example@gmail.com </span>
              </ListGroupItem>

            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h4 className="footer__title"> NewsLetter </h4>
            <p> Subscribe our newsletter </p>
            <div className="newsletter form__group">
              <input type="email" placeholder="Enter your email" />
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg='6' md='6'>
            <p className="copyright__text"> Copyright - 2023, Website made by Pulkit Kumar. All Rights Reserved </p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0"> Follow: </p>
              <span> <Link to='https://www.facebook.com'><i class="ri-facebook-line"></i></Link></span>
              <span> <Link to='https://www.github.com/Pulkit0900'><i class="ri-github-line"></i></Link></span>
              <span> <Link to='https://www.youtube.com'><i class="ri-youtube-line"></i></Link></span>
              <span> <Link to='https://www.linkedin.com'><i class="ri-linkedin-line"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
