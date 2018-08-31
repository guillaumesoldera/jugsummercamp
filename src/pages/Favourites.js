import React, { PureComponent } from 'react';
import '../styles/Favourites.css';
import '../styles/collections.css';

export class Favourites extends PureComponent {
    render() {
        return (
            <div className="favourites-container collections-container">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Favoris</h4></li>
                </ul>
            </div>
        );
    }
}