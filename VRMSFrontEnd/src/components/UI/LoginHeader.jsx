import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";


function LoginHeader() {
    return ( 
        <div className="header__middle">
        <Container>
          <Row style={{justifyContent: 'center'}}>
            <Col lg="4" md="3" sm="4">
              <div className="logo" style={{paddingLeft: "90px"}}>
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-motorbike-fill"></i>
                    <span>
                      Rent On Ride
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

          
      
          </Row>
        </Container>
      </div>
     );
}

export default LoginHeader;