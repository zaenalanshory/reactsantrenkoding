import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';
import Kartu from './Kartu';
import { Button } from 'reactstrap';

export default class Daftar extends React.Component {
  state = {
    kartu4: {
      img:
        'https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg',
      judul: 'Kajian Koding #3',
      subjudul: 'ReactJS dan Firebase Auth/Hosting'
    }
  };
  render() {
    return (
      <Container>
        <h2 class="senter">Daftar Santren Kilat Koding</h2>
        <Row>
          <Col xs="6" sm="4">
            <Kartu />
          </Col>
          <Col xs="6" sm="4" />
          <Col sm="4" />
        </Row>
        <p className="lead" align="center">
          <Button outline color="success" size="lg">
            Lihat Seluruh Santren Kilat
          </Button>
        </p>
      </Container>
    );
  }
}
