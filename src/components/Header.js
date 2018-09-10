import React, { Component } from 'react';
import logo from '../images/logo-summercamp.png';
import '../styles/Header.css'
import { NavLink } from "react-router-dom";
import { getDevice, Devices } from './utils';


const encanLat = 46.1519906;
const encanLon = -1.1528218;

export class Header extends Component {

    onProgramTab = (match, location)=> {
        const { pathname } = location;
        return pathname === '/' || pathname.startsWith('/program/')
    }

    reload = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        window.location.reload(true);
    }

    render() {

        const device = getDevice();
        let goToUrl = `https://www.google.com/maps/dir/?api=1&destination=${encanLat},${encanLon}`;
        if (device && device === Devices.ios) {
          goToUrl = `http://maps.apple.com/?daddr=${encanLat},${encanLon}&dirflg=d`
        } else if (device && device === Devices.android) {
          goToUrl = `google.navigation:q=${encanLat},${encanLon}`
        }


        return (
            <nav>
                <div className="nav-wrapper">
                <a href={goToUrl} className="location-container"><i className="fa fa-location-arrow location"></i></a>
                <NavLink exact  to="/" className="brand-logo right">
                    <span className="brand-title">JugSummercamp</span>
                    <img src={logo} className="jug-logo" alt="JugSummercamp"/>
                </NavLink>
                <ul id="nav-mobile" className="left">
                    <li><NavLink exact to="/" isActive={this.onProgramTab}>Programme</NavLink></li>
                    <li><NavLink to="/speakers">Speakers</NavLink></li>
                    <li><NavLink to="/favorites">Favoris</NavLink></li>
                    <li id="new-version" style={{"display": "none"}}><div onClick={this.reload}><i className="fa fa-repeat"></i><span className="new badge" data-badge-caption="">1</span></div></li>
                </ul>
                </div>
            </nav>
        );
    }
}
