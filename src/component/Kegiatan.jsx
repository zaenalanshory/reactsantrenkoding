import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';

export default class Kegiatan extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6" className="kegiatan">
              <br />
              <h4 className="senter">Kegiatan</h4>
              <br />
              <div align="center">
                <p>
                  <i class="anticon anticon-login" /> Koding
                </p>
                <p>
                  <i class="anticon anticon-login" /> Belajar Agama dan Alquran
                </p>
                <p>
                  <i class="anticon anticon-login" />Pendidikan karakter
                </p>
              </div>
            </Col>
            <Col xs="6">.col-6</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
