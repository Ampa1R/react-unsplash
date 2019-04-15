import React, { Component } from 'react';
import { Route, withRouter, Redirect, Link } from "react-router-dom";

import { connect } from 'react-redux';

import Feed from '../../components/Feed';
import Auth from '../../components/Auth';
import Popup from '../../components/Popup';
import Detail from '../Detail';

import { goAuth } from '../../api/unsplash';

import { fetchFeed, likePhoto, unlikePhoto, authByCode, showPopup, hidePopup } from '../../actions';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchFeed();
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const more = (window.innerHeight + 200 + window.scrollY) >= document.body.offsetHeight;
    if(more && !this.props.feed.isLoading) this.props.fetchFeed();
  };
  handleLike = (id, liked) => {
    if(this.props.logged) {
      if(liked) this.props.unlikePhoto(id);
      else this.props.likePhoto(id);
    }
    else this.props.showPopup();
  };
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={ (routeProps) => <Feed {...routeProps} feed={this.props.feed.items} onLike={this.handleLike} isLoading={this.props.feed.isLoading} /> } />
        <Route path="/auth" render={
          routeProps => this.props.logged
                          ? (<Redirect to="/" />)
                          : (<Auth {...routeProps} authByCode={this.props.authByCode} goAuth={goAuth} />)
        } />
        <Route path="/:id" render={
            (routeProps) => {
              const detailItem = this.props.feed.items.filter( photo => photo.id === routeProps.match.params.id ).pop();
              if(detailItem)
                return <Detail {...routeProps} item={detailItem} onLike={this.handleLike} />
              else return <Redirect to="/" />;
            }
          }
        />
        {this.props.popup &&
          <Popup onHidePopup={this.props.hidePopup} title={'You\'re no logged in'}>
            <Link to="/auth">Log in via Unsplash</Link>
          </Popup>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state;

const mapDispatchToState = dispatch => {
  return {
    fetchFeed: () => dispatch(fetchFeed()),
    likePhoto: id => dispatch(likePhoto(id)),
    unlikePhoto: id => dispatch(unlikePhoto(id)),
    authByCode: code => dispatch(authByCode(code)),
    showPopup: () => dispatch(showPopup()),
    hidePopup: () => dispatch(hidePopup())
  }
};

App = withRouter(connect(mapStateToProps, mapDispatchToState)(App));

export default App;
