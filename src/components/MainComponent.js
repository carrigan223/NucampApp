import React, { Component } from 'react';
import Directory from './DirectoryComponents';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    campsites: CAMPSITES,
    };
  }

             

//this render method is what is viewed in browswer
//the header component also contains the navbar
  render() {
    
    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;