import React, { PureComponent } from 'react';
import '../styles/Speaker.css';
import '../styles/collections.css';

export class Speaker extends PureComponent {
    render() {
        return (
            <div className="speakers-container collections-container">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Speakers</h4></li>
                </ul>
            </div>
        );
    }
}