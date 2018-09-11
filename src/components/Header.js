import React, {Component} from 'react';
import logo from '../images/logo-summercamp.png';
import '../styles/Header.css'
import {NavLink, withRouter} from "react-router-dom";
import {getDevice, Devices} from './utils';


const encanLat = 46.1519906;
const encanLon = -1.1528218;

class _Header extends Component {

    onProgramTab = (match, location) => {
        const {pathname} = location;
        return pathname === '/' || pathname.startsWith('/program/')
    }

    reload = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        window.location.reload(true);
    }

    back = () => {
        this.props.history.goBack();
    };

    goToProgram = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault()
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        this.props.history.push(`/`);
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
                    <div className="brand-logo right">
                        {this.props.back &&
                        <div className="back" onClick={this.back}><i className="fa fa-angle-left"/>&nbsp;</div>}
                        <span className="brand-title" onClick={this.goToProgram}>JugSummercamp</span>
                        <a href={goToUrl} className="location-container">
                            <i className="fa fa-location-arrow location"/>
                        </a>
                        <img src={logo} onClick={this.goToProgram}  className="jug-logo" alt="JugSummercamp"/>

                    </div>

                    <ul id="nav-mobile" className="left">
                        <li><NavLink exact to="/" isActive={this.onProgramTab}><div className="tab"><i className="fa fa-tasks" aria-hidden="true"/></div></NavLink></li>
                        <li><NavLink to="/speakers"><div className="tab"><i className="fa fa-users" aria-hidden="true"/></div></NavLink></li>
                        <li><NavLink to="/favorites"><div className="tab"><i className="fa fa-heart" aria-hidden="true"/></div></NavLink></li>
                        <li id="new-version-mobile" style={{"display": "none"}}>
                            <div className="tab" onClick={this.reload}><i className="fa fa-repeat"></i><span className="new badge"
                                                                                             data-badge-caption="">1</span>
                            </div>
                        </li>
                    </ul>

                    <ul id="nav-desktop" className="left">
                        <li><NavLink exact to="/" isActive={this.onProgramTab}>Programme</NavLink></li>
                        <li><NavLink to="/speakers">Speakers</NavLink></li>
                        <li><NavLink to="/favorites">Favoris</NavLink></li>
                        <li id="new-version-desktop" style={{"display": "none"}}>
                            <div onClick={this.reload}><i className="fa fa-repeat"></i><span className="new badge"
                                                                                             data-badge-caption="">1</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export const Header = withRouter(_Header);
