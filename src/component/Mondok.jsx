import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';
import { Button } from 'reactstrap';

export default class Mondok extends React.Component {
  render() {
    return (
      <Container className="mondok">
        <h3 className="senter">Mondok by Santren Koding</h3>
        <br />
        <p className="senter">
          Sebuah Kegiatan Belajar Intensif Programming &amp; Al Qur'an Selama 3
          Tahun hingga jaminan kerja{' '}
        </p>
        <br />
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4">
            <img
              width="100%"
              src="http://i67.tinypic.com/2m2gkyp.png"
              alt="hore"
            />
            <br />
            <br />
            <div align="center">
              <a href="" className="senter btn btn-outline-success">
                Lihat Selengkapnya
              </a>
            </div>
          </Col>
          <Col xs="6" sm="4" />
        </Row>
      </Container>
    );
  }
}
