import React, { PureComponent } from 'react';
import { Schedule } from '../components';
import { Talk } from '../components/Talk';
import { classSet } from '../components/utils';
import { retrieveTalks } from '../services/talks';

export class Program extends PureComponent {

    state = {
        talks: [],
        currentTalk: undefined,
    }

    componentDidMount() {
        retrieveTalks()
            .then(talks => {
                let currentTalk = undefined;
                if (this.props.talkId) {
                    currentTalk = talks.find(item => item.id === this.props.talkId)
                }
                this.setState({
                    talks,
                    currentTalk
                })
            })
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.talkId !== this.props.talkId) {
            let currentTalk = undefined;
            if (nextProps.talkId) {
                currentTalk = this.state.talks.find(item => item.id === nextProps.talkId)
            }
            this.setState({
                currentTalk
            })
        }
    }

    onTalkSelected = (talk) => {
    this.setState({
        currentTalk: talk,
    })
    }


    render() {
        return (
            <div className={classSet({"program-container": true, "talk-detail": this.state.currentTalk !== undefined})}>
                <div className="row">
                    <div className="col s12 l6">
                    <Schedule talks={this.state.talks}/>
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
        );
    }
}