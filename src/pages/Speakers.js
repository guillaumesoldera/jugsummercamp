import React, { PureComponent, Component } from 'react';
import '../styles/Speaker.css';
import '../styles/collections.css';
import { Speaker } from '../components';
import { retrieveSpeakers } from '../services/speakers';
import { chunk, classSet } from '../components/utils';
import { NavLink } from 'react-router-dom';


class SpeakerItem extends Component {
    render() {
        const { picture, name, id } = this.props.speaker;
        return (
            <NavLink to={`/speakers/${id}`} className="card speaker hoverable">
                <div className="card-image">
                    <img src={picture} alt={name}/>
                </div>
                <div className="card-content">
                    <p>{name}</p>
                </div>
            </NavLink>
        );
    }
}


export class Speakers extends Component {

    state = {
        speakers: [],
        currentSpeaker: undefined,
    }

    componentDidMount() {
        retrieveSpeakers()
            .then(speakers => {
                let currentSpeaker = undefined;
                if (this.props.speakerId) {
                    currentSpeaker = speakers.find(sp => sp.id === this.props.speakerId);
                }
                this.setState({
                    speakers,
                    currentSpeaker,
                })
            })
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.speakerId !== this.props.speakerId) {
            let currentSpeaker = undefined;
            if (nextProps.speakerId) {
                currentSpeaker = this.state.speakers.find(sp => sp.id === nextProps.speakerId);
            }
            this.setState({
                currentSpeaker
            })
        }
    }

    render() {
        const chunks = chunk(4, this.state.speakers);

        return (
            <div className={classSet({"collections-container": true, "speaker-detail": this.state.currentSpeaker !== undefined})}>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Speakers</h4></li>
                </ul>
                <div className="row">
                    <div className="col s12 l7">
                    <div className="speakers-container">
                    {
                        chunks.map((row, idx) => {
                            return (
                                <div key={idx} className="row">
                                {
                                    row.map(sp => {
                                        return (
                                            <div key={sp.id} className="col s12 l3">
                                                <SpeakerItem speaker={sp} />
                                            </div>                
                                        )
                                    })
                                }
                            </div> 
                            )       
                        })
                    }
                    </div>
                    </div>
                    {
                        this.state.currentSpeaker && 
                        (
                            <div className="col s12 l5">
                                <Speaker speaker={this.state.currentSpeaker}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}