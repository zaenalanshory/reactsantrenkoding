import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';

export default class Kegiatan extends React.Component {
  render() {
    return (
      <div className="border">
        <Container>
          <Row>
            <Col sm="12" md="6" lg="6" className="kegiatan">
              <h4 className="senter">Kegiatan</h4>

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
            <Col sm="12" md="6" lg="6" className="kegiatan2 senter">
              <img
                height="100px"
                src="http://i63.tinypic.com/oid9xu.png"
                alt="hore"
              />
              <h4>"Memberi Manfaat Untuk Ummat"</h4>
              <br />
              <p>-Santren Koding-</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
