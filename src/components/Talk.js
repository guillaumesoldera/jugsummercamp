import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "../styles/Talk.css";
import marked from 'marked';
import { NavLink, withRouter } from 'react-router-dom';

class _Talk extends PureComponent {

    static propTypes = {
        talk: PropTypes.object.isRequired,
    }

    back = () => {
        this.props.history.goBack();
    }

    render() {
        const { title, description, author, type, room, time } = this.props.talk;
        return (
            <div className="talk-container">
                <div className="talk-header">
                    <h4><div className="back" to="/" onClick={this.back}><i className="fa fa-angle-left"></i>&nbsp;</div>{title}</h4>
                </div>
                <div className="talk-content">
                    <div dangerouslySetInnerHTML={{__html: marked(description)}}/>
                </div>
                <div className="talk-info">
                    <span className="talk-author">{
                        author.map((a, idx) => {
                            const suffix = idx === author.length - 1 ? '' : ' - ';
                            return (
                                <NavLink to={`/speakers/${a.id}`} key={a.id}>{a.name}{suffix}</NavLink>
                            )
                        })
                    }</span>
                    <span className="talk-type">{type}</span>
                    <span className="talk-room"><i className="fa fa-map-marker"></i>&nbsp;{room}</span>&nbsp;-&nbsp;<span className="talk-time"><i className="fa fa-clock-o"></i>&nbsp;{time}</span>
                </div>
            </div>
        );
    }
}

export const Talk = withRouter(_Talk)