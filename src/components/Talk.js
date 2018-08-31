import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "../styles/Talk.css";
import { withRouter } from 'react-router-dom';


class _Talk extends PureComponent {

    static propTypes = {
        talk: PropTypes.object.isRequired,
    }

    back = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="talk-container">
                <div className="talk-header">
                    <h4><div className="back" to="/" onClick={this.back}><i className="fa fa-angle-left"></i></div>&nbsp;Détail du talk</h4>
                </div>
                <div className="talk-content">
                    <h5>{this.props.talk.title}</h5>
                </div>
            </div>
        );
    }
}

export const Talk = withRouter(_Talk)