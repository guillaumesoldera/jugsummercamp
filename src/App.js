import React, { Component } from 'react';
import './styles/App.css';
import { Header } from './components';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Program, Speakers, NoMatch, Favorites } from './pages';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/'>
        <div>
            <Switch>
              <Route exact path="/" component={Program} />
              <Route exact path="/program" component={Program} />
              <Route path="/program/:talkId" render={({match}) => <Program talkId={match.params.talkId}/>} />
              <Route exact path="/speakers" component={Speakers} />
              <Route path="/speakers/:speakerId" render={({match}) => <Speakers speakerId={match.params.speakerId}/>} />
              <Route path="/favorites" component={Favorites} />
              <Route component={NoMatch} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
