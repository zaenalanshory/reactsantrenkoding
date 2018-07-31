import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';
import Kartu from './Kartu';
import { Button } from 'reactstrap';

export default class kajianKoding extends React.Component {
  state = {
    kartu1: {
      img:
        'https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg',
      judul: 'Kajian Koding #3',
      subjudul: 'ReactJS dan Firebase Auth/Hosting'
    },
    kartu2: {
      img:
        'https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381',
      judul: 'Kajian Koding #2',
      subjudul: 'html, css, boostrap dasar'
    },
    kartu3: {
      img:
        'https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572',
      judul: 'Kajian Koding #1',
      subjudul: 'Belajar Laravel Dasar'
    }
  };
  render() {
    return (
      <Container>
        <h2 class="senter">Daftar Kajian Koding Rutin</h2>
        <Row>
          <Col>
            <Kartu />
          </Col>
          <Col>
            <Kartu />
          </Col>
          <Col>
            <Kartu />
          </Col>
        </Row>
        <br />
        <br />

        <p className="lead" align="center">
          <Button outline color="success" size="lg">
            Lihat Seluruh Santren Kilat
          </Button>
        </p>
      </Container>
    );
  }
}
