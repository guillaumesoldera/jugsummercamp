import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Header, Schedule } from './components';
import { Talk } from './components/Talk';
import { classSet } from './components/utils';

class App extends Component {

  state = {
    currentTalk: undefined,
  }

  onTalkSelected = (talk) => {
    this.setState({
      currentTalk: talk,
    })
  }

  back = () => {
    this.setState({
      currentTalk: undefined,
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className={classSet({"content": true, "talk-detail": this.state.currentTalk !== undefined})}>
          <div className="row">
            <div className="col s12 l6">
              <Schedule onSelect={this.onTalkSelected}/>
            </div>
            {
              this.state.currentTalk && (
                <div className="col s12 l6">
                  <Talk talk={this.state.currentTalk} back={this.back}/>
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
