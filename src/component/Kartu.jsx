import React from 'react';
import { Card, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

const Kartu = props => {
  return (
    <div>
      <Card>
        <img
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="hore"
        />
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardLink href="#">By Santrenkoding</CardLink>
          <CardLink href="#">Kuota Terbatas</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};


export default Kartu;
