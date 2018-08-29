import React, { PureComponent } from 'react';
import { Schedule } from '../components';
import { Talk } from '../components/Talk';
import { classSet } from '../components/utils';
import { retrieveTalks } from '../services/talks';

export class Program extends PureComponent {

    state = {
        currentTalk: undefined,
    }

    componentDidMount() {
        if (this.props.talkId) {
            retrieveTalks()
                .then(talks => {
                    this.setState({
                        currentTalk: talks.find(item => item.id === this.props.talkId)
                    })
                })
        }
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
            <div className={classSet({"program-container": true, "talk-detail": this.state.currentTalk !== undefined})}>
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
        );
    }
}