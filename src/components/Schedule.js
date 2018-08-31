import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/Schedule.css";
import "../styles/collections.css";
import { retrieveTalks } from '../services/talks';
import { NavLink } from "react-router-dom";

class ScheduleRow extends Component {

    static propTypes = {
        talk: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.array.isRequired,
            type: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
        }),
    }

    render() {
        const { id, title, author, type, room, time} = this.props.talk;
        return (
            <li className="collection-item">
                <NavLink to={`/program/${id}`} className="schedule-item collection-item-row">
                <p className="title">{title}</p>
                <p className="talk-info">
                    <span className="talk-type">{type}</span><br/>
                    <span className="talk-author">{
                        author.map((a, idx) => {
                            const suffix = idx === author.length - 1 ? '' : ' - ';
                            return (
                                <span key={a}>{a}{suffix}</span>
                            )
                        })
                    }</span><br />
                    <span  className="talk-room">{room}</span>&nbsp;-&nbsp;<span className="talk-time"><i className="fa fa-clock-o"></i>&nbsp;{time}</span>
                </p>
                <span className="secondary-content"><i className="fa fa-star-o"></i></span>
                </NavLink>
            </li>
        )
    }
}

export class Schedule extends Component {

    render() {
        return (
            <div className="schedule-container collections-container">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Programme</h4></li>
                    {
                        this.props.talks.map((talk, idx) => {
                            return (
                                <ScheduleRow key={idx} talk={talk} />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}