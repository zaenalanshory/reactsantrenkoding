import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';

export default class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Container>
          <br />
          <br />
          <h3 className="senter">Kontak</h3>
          <Row>
            <Col align="center">
              <p> 082225111587 </p>
              <p>santrenkoding@gmail.com </p>
              <br />

              <p>Titik Ruang Space,</p>
              <p>Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik</p>
              <p>Kota Semarang, Jawa Tengah 50269</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
