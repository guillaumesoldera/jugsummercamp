import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class _Speaker extends Component {

    back = () => {
        this.props.history.goBack();
    } 

    render() {
        const { name } = this.props.speaker;
        return (
            <div className="speaker-container">
                <div className="speaker-header">
                    <h4><div className="back" onClick={this.back}><i className="fa fa-angle-left"></i></div>&nbsp;{name}</h4>
                </div>
                <div className="speaker-content">
                </div>
            </div>
        );
    }
}
export const Speaker = withRouter(_Speaker)

