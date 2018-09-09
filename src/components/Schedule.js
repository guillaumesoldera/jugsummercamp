import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import "../styles/Schedule.css";
import "../styles/collections.css";
import { NavLink } from "react-router-dom";
import { classSet } from './utils';

class ScheduleRow extends Component {

    static propTypes = {
        talk: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.array.isRequired,
            type: PropTypes.string.isRequired,
            room: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
        }),
    }

    state = {
        isFavourite: this.props.isFavourite
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isFavourite !== this.state.isFavourite) {
            this.setState({
                isFavourite: nextProps.isFavourite
            })
        }
    }

    onClick = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        if (this.state.isFavourite) {
            this.props.removeFromFavourites(this.props.talk)
            this.setState({
                isFavourite: false,
            })
        } else {
            this.props.addToFavourites(this.props.talk);
            this.setState({
                isFavourite: true,
            })
        }
    }

    render() {
        const { id, title, author, type, room, time} = this.props.talk;
        return (
            <li className="collection-item">
                <NavLink to={`/program/${id}`} className="schedule-item collection-item-row">
                <p className="title">{title}</p>
                <p className="talk-info">
                    <span className="talk-author">{
                        author.map((a, idx) => {
                            const suffix = idx === author.length - 1 ? '' : ' - ';
                            return (
                                <NavLink to={`/speakers/${a.id}`} key={a.id}>{a.name}{suffix}</NavLink>
                            )
                        })
                    }</span><br />
                    <span className="talk-type">{type}</span><br/>
                    <span className="talk-room"><i className="fa fa-map-marker"></i>&nbsp;{room}</span>&nbsp;-&nbsp;<span className="talk-time"><i className="fa fa-clock-o"></i>&nbsp;{time}</span>
                </p>
                <span className="secondary-content" onClick={this.onClick}>
                <i className={classSet({"fa": true, "fa-star-o": !this.state.isFavourite, "fa-star": this.state.isFavourite})}></i></span>
                </NavLink>
            </li>
        )
    }
}

class FetchingRow extends Component {
    render() {
        return (
            <li className="collection-item">
                <div className="fake-item">
                </div>
            </li>
        )
    }
}

export class Schedule extends Component {

    render() {
        return (
                <ul className="collection">
                    {
                        this.props.fetching && (
                            <Fragment>
                                <FetchingRow />
                                <FetchingRow />
                                <FetchingRow />
                                <FetchingRow />
                                <FetchingRow />
                                <FetchingRow />
                            </Fragment>
                        )
                    }
                    {
                        this.props.talks.map((talk, idx) => {
                            return (
                                <ScheduleRow key={idx} talk={talk} isFavourite={this.props.favourites.indexOf(talk.id) !== -1} addToFavourites={this.props.addToFavourites} removeFromFavourites={this.props.removeFromFavourites} />
                            )
                        })
                    }
                </ul>
        );
    }
}