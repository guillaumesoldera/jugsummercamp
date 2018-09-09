import React, { PureComponent } from 'react';
import { Schedule } from '../components';
import { Talk } from '../components/Talk';
import { classSet } from '../components/utils';
import { retrieveTalks } from '../services/talks';
import { readAllFavouriteKeys, addFavourite, removeFavourite } from '../services/favourites';

export class Program extends PureComponent {

    state = {
        talks: [],
        currentTalk: undefined,
        fetching: true,
        favourites: [],
    }

    componentDidMount() {
        Promise.all([retrieveTalks(), readAllFavouriteKeys()])
            .then(results => {
                const [talks, favourites] = results;
                let currentTalk = undefined;
                if (this.props.talkId) {
                    currentTalk = talks.find(item => item.id === this.props.talkId)
                }
                this.setState({
                    talks,
                    currentTalk,
                    fetching: false,
                    favourites
                })
            })
    }

    addTalkToFavourites = (talk) => {
        addFavourite(talk)
            .then(() => {
                this.state.favourites.push(talk.id)
            })
    }

    removeTalkFromFavourites = (talk) => {
        removeFavourite(talk)
            .then(() => {
                this.state.favourites = this.state.favourites.filter(elem => elem !== talk.id)
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
            <div className={classSet({"collections-container": true, "talk-detail": this.state.currentTalk !== undefined})}>
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Programme</h4></li>
                </ul>
                <div className="row">
                    <div className="col s12 l6">
                        <div className="program-container">
                            <Schedule addToFavourites={this.addTalkToFavourites} removeFromFavourites={this.removeTalkFromFavourites} talks={this.state.talks} fetching={this.state.fetching} favourites={this.state.favourites}/>
                        </div>
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