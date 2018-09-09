import React, {PureComponent} from 'react';
import {NavLink} from "react-router-dom";

export class FavoriteRow extends PureComponent {
    render() {
        const {title, author, type, room, time} = this.props.talk;
        return (
            <li className="collection-item">
                <a className="schedule-item collection-item-row">
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
                        <span className="talk-room"><i className="fa fa-map-marker"/>&nbsp;{room}</span>&nbsp;
                        -&nbsp;<span className="talk-time"><i className="fa fa-clock-o"/>&nbsp;{time}</span>
                    </p>
                </a>
                <span/>
            </li>
        )
    }
}