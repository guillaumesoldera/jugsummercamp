import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "../styles/Talk.css"

export class Talk extends PureComponent {

    static propTypes = {
        talk: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div className="talk-container">
                <div className="talk-header">
                    <h4>Détail du talk</h4>
                </div>
            </div>
        );
    }
}