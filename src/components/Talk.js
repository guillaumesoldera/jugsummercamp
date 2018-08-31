import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "../styles/Talk.css";
import { NavLink } from 'react-router-dom';


export class Talk extends PureComponent {

    static propTypes = {
        talk: PropTypes.object.isRequired,
        back: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="talk-container">
                <div className="talk-header">
                    <h4><NavLink className="back" to="/" onClick={this.props.back}><i className="fa fa-angle-left"></i></NavLink>&nbsp;Détail du talk</h4>
                </div>
                <div className="talk-content">
                    <h5>{this.props.talk.title}</h5>
                </div>
            </div>
        );
    }
}