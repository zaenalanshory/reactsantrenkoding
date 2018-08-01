import React from 'react';
import { Card, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

const Kartu = props => {
  return (
    <div>
      <Card>
        <img width="100%" src={props.gambar.img} alt="hore" />
        <CardBody>
          <CardTitle>{props.gambar.judul}</CardTitle>
          <CardSubtitle>{props.gambar.subjudul}</CardSubtitle>
          <CardLink style={{ color: '#C4C4C4' }} href="#">
            By Santrenkoding
          </CardLink>
          <CardLink style={{ color: 'red' }} href="#">
            Kuota Terbatas
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Kartu;
