import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './CSS/style.css';

import { Button } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div
        className="Footer"
        style={{ backgroundColor: 'White', padding: '20px' }}>
        <Container>
          <Row>
            <Col align="left">
              Copyright © Santren Koding 2018. All rights reserved.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
