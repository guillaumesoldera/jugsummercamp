import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/Schedule.css"
import { retrieveTalks } from '../services/talks';
import { NavLink } from "react-router-dom";

class ScheduleRow extends Component {

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
        this.props.onClick(this.props.talk)
    }

    render() {
        const { id, title, author, type, room, time} = this.props.talk;
        return (
            <li className="collection-item">
                <NavLink to={`/program/${id}`} className="schedule-item" onClick={this.onRowSelected}>
                <p className="title">{title}</p>
                <p className="talk-info">
                    <span className="talk-type">{type}</span><br/>
                    <span className="talk-author">{author}</span><br />
                    <span  className="talk-room">{room}</span>&nbsp;<span className="talk-time">{time}</span>
                </p>
                <span className="secondary-content"><i className="fa fa-star-o"></i></span>
                </NavLink>
            </li>
        )
    }
}

export class Schedule extends Component {

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