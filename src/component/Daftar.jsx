import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';
import Kartu from './Kartu';
import { Button } from 'reactstrap';

export default class Daftar extends React.Component {
  state = {
    kartu4: {
      img:
        'https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191',
      judul: 'Santren Kilat #1 (Coming Soon)',
      subjudul: '4 Hari Intensif Laravel'
    }
  };
  render() {
    return (
      <Container style={{ borderTop: '1px solid #e7e7e7', padding: '50px' }}>
        <h2 class="senter">Daftar Santren Kilat Koding</h2>
        <br />
        <Row>
          <Col sm="12" md="6" lg="4">
            <Kartu gambar={this.state.kartu4} />
          </Col>
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
