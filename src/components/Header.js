import React, { Component } from 'react';
import logo from '../images/logo-summercamp.png';
import '../styles/Header.css'
import { NavLink } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <NavLink exact  to="/" className="brand-logo right">
                    <span className="brand-title">JugSummercamp</span>
                    <img src={logo} className="jug-logo"></img>
                </NavLink>
                <ul id="nav-mobile" className="left">
                    <li><NavLink exact to="/">Programme</NavLink></li>
                    <li><NavLink to="/speakers">Speakers</NavLink></li>
                    <li><NavLink to="/favourites">Favoris</NavLink></li>
                </ul>
                </div>
            </nav>
        );
    }
}
