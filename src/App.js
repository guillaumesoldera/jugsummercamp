import React, { Component } from 'react';
import './styles/App.css';
import { Header } from './components';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Program, Speaker, NoMatch } from './pages';

class App extends Component {

  render() {
    console.log('render')
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Program} />
              <Route path="/program/:talkId" render={({match}) => <Program talkId={match.params.talkId}/>} />
              <Route path="/speakers" component={Speaker} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
