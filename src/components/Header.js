import React, { PureComponent } from 'react';
import logo from '../images/logo-summercamp.png';
import '../styles/Header.css'
export class Header extends PureComponent {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo right">
                    <span className="brand-title">JugSummercamp</span>
                    <img src={logo} className="jug-logo"></img>
                </a>
                <ul id="nav-mobile" className="left">
                    <li><a href="#program">Programme</a></li>
                    <li><a href="#speakers">Speakers</a></li>
                    <li><a href="#favourites">Favoris</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}
