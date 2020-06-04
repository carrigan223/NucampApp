import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponents';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { CAMPSITES } from '../shared/campsites'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    campsites: CAMPSITES,
    selectedCampsite: null
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({selectedCampsite: campsiteId});// clicking on a campsite changes selected campsite value from null to that campsite
    }                         

//this render method is what is viewed in browswer
//the header component also contains the navbar
  render() {
    return (
      <div>
        <Header />
        <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
        <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;