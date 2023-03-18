import React from "react";
import "./Header.css"

import logo from "./img/logo.png"
import cart from "./img/cart.png"
import day from "./img/day.png"
import night from "./img/night.png"

class Header extends React.Component {
    render(){
        return(
            <header className="Header" data-theme={this.props.theme}>
                <div className="Header-logo">
                    <img src={logo} alt="logo" className="Header-logoImage"/>
                    <p className="Header-logoText">Abibas</p>
                </div>
                <nav className="Heade-nav">
                    <div className="Header-navItem">Домашня</div>
                    <div className="Header-navItem">Товари</div>
                    <div className="Header-navItem">Контакти</div>
                </nav>
                <div className="Header-controlls">
                    <button onClick={this.props.themeHandler} className="Header-btn Header-themeBtn"><img src={this.props.theme === "night" ? night : day} alt="theme switch" /></button>
                    <button data-count={this.props.basket.length} className="Header-btn Header-cartBtn"><img src={cart} alt="cart" /></button>
                </div>
            </header>
        )
    }
}

export default Header