import React, { Component } from "react"; //read more about what this is doing here
import Directory from "./DirectoryComponents"; //
import CampsiteInfo from "./CampsiteInfoComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { addComment } from '../redux/ActionsCreator';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//setting the variable mapStatetoProps to be exprted
const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};
//setting mapDispatchToProps to be exported, this makes the addcomment function available as a prop
const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
};

class Main extends Component {
  //this render method is what is viewed in browswer
  //the header component also contains the navbar
  render() {
    const HomePage = () => {
      return (
        <Home //home is returning the filtered items inour data
          campsite={
            this.props.campsites.filter((campsite) => campsite.featured)[0]
          }
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
        />
      );
    };
    //come back and really break these down more top
    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          addComment = {this.props.addComment}/* able to give it the addcomment function as a prop*/
        />
      );
    };
    //make sure in my main im sending the data through
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => (
              <About
                comments={this.props.comments}
                partners={this.props.partners}
              />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
