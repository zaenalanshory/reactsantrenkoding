import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';

export default class Sponsor extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'white',
          margin: 0,
          borderTop: '1px solid #e7e7e7'
        }}>
        <br />
        <h3 className="senter">Sponsor & Partner</h3>
        <br />
        <Container>
          <Row>
            <Col xs="6" sm="4" />
            <Col xs="6" sm="4">
              <img
                width="100%"
                class="box-shadow"
                src="http://i67.tinypic.com/2hcn70k.jpg"
                alt="hore"
              />
            </Col>
            <Col sm="4" />
          </Row>
          <Row className=" py-3">
            <Col lg="2" md="2" xs="12" sm="6">
              <img
                height="100px"
                class="box-shadow"
                src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png"
                alt="hore"
              />
            </Col>
            <Col lg="2" md="2" xs="12" sm="6">
              <img
                height="100px"
                width="auto"
                class="box-shadow"
                src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"
                alt="hore"
              />
            </Col>
            <Col lg="2" md="2" xs="12" sm="6">
              <img
                height="100px"
                class="box-shadow"
                src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg"
                alt="hore"
              />
            </Col>
            <Col lg="2" md="2" xs="12" sm="6">
              <img
                height="100px"
                class="box-shadow"
                src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png"
                alt="hore"
              />
            </Col>
            <Col lg="2" md="2" xs="12" sm="6">
              <img
                height="100px"
                class="box-shadow"
                src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500"
                alt="hore"
              />
            </Col>
            <Col lg="2" md="2" xs="12" sm="6">
              <img
                height="100px"
                class="box-shadow"
                src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"
                alt="hore"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="6" md="4" lg="2">
              <img
                height="100px"
                src="http://sdk.semarangkota.go.id/web/pemkot.png"
                alt="hore"
              />
            </Col>
            <Col sm="6" md="4" lg="4">
              <img
                height="80px"
                src="http://www.sandec.org/images/sandec-logo.png"
              />
            </Col>
            <Col sm="6" md="4" lg="2">
              <img
                height="100px"
                src="http://i64.tinypic.com/28v94w6.png"
                alt="hore"
              />
            </Col>
            <Col sm="6" md="4" lg="4">
              <img
                height="50px"
                src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png"
              />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}
