import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Header, Schedule } from './components';
import { Talk } from './components/Talk';

class App extends Component {

  state = {
    currentTalk: undefined,
  }

  onTalkSelected = (talk) => {
    console.log('onTalkSelect')
    this.setState({
      currentTalk: talk,
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="content">
          <div className="row">
            <div className="col s12 l6">
              <Schedule onSelect={this.onTalkSelected}/>
            </div>
            {
              this.state.currentTalk && (
                <div className="col s12 l6">
                  <Talk talk={this.state.currentTalk}/>
                </div>
              )
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
