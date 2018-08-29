import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "../styles/Schedule.css"
import { retrieveTalks } from '../services/talks';

class ScheduleRow extends PureComponent {

    static propTypes = {
        talk: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
        }),
        onClick: PropTypes.func.isRequired,
    }

    onRowSelected = (e) => {
        console.log('onClick')
        this.props.onClick(this.props.talk)
    }

    render() {
        const { title, author, type, room, time} = this.props.talk;
        return (
            <li className="collection-item">
                <div className="schedule-item" onClick={this.onRowSelected}>
                <p className="title">{title}</p>
                <p className="talk-info">
                    <span className="talk-type">{type}</span><br/>
                    <span className="talk-author">{author}</span><br />
                    <span  className="talk-room">{room}</span>&nbsp;<span className="talk-time">{time}</span>
                </p>
                <a href="#!" className="secondary-content"><i className="fa fa-star-o"></i></a>
                </div>
            </li>
        )
    }
}

export class Schedule extends PureComponent {

    state = {
        talks: []
    }

    componentDidMount() {
        retrieveTalks()
            .then(talks => {
                this.setState({
                    talks
                })
            })
    }


    render() {
        return (
            <div className="schedule-container">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Programme</h4></li>
                    {
                        this.state.talks.map((talk, idx) => {
                            return (
                                <ScheduleRow key={idx} talk={talk} onClick={this.props.onSelect}/>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}