import React, { Component } from 'react';
import NavBar from './component/Navbar';
import JumboTron from './component/Jumbotron';
import KajianKoding from './component/kajiankoding';
import Daftar from './component/Daftar';
import Kegiatan from './component/Kegiatan';
import Mondok from './component/Mondok';
import Sponsor from './component/Sponsor';
import About from './component/About';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <div className="tubuh">
          <KajianKoding />
          <Daftar />
          <Kegiatan />
          <Mondok />
          <Sponsor />
          <About />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
