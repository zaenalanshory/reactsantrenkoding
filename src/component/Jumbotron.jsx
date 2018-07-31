import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumboTron = props => {
  return (
    <div>
      <Jumbotron className="jumboytron">
        <h1 className="display-3 senter">Belajar Jadi Asyik!</h1>
        <p className="lead senter">
          Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren
          Koding.
        </p>
        <hr className="my-2" />
        <p/>
        <p className="lead" align="center">
          <Button color="success" size="lg">
            Mulai Belajar
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;
