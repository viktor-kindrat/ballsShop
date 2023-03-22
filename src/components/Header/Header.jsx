import React from "react";
import "./Header.css"

import BasketMenu from "../BasketMenu/BasketMenu";

import logo from "./img/logo.png"
import cart from "./img/cart.png"
import day from "./img/day.png"
import night from "./img/night.png"

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            openBasket: false,
            openMenu: false
        }
        this.basketHandle = this.basketHandle.bind(this);
        this.menuHandle = this.menuHandle.bind(this)
    }
    basketHandle (){
        this.setState(state=>{
            if (state.openMenu === false || window.innerWidth >= 800) {
                return {
                    openBasket: !state.openBasket
                }
            }
        })
    }
    menuHandle (){
        this.setState(state=> {
            if (state.openBasket === false) {
                return {
                    openMenu: !state.openMenu
                }
            }
        })
    }
    render(){
        return(
            <header className="Header" data-theme={this.props.theme}>
                <div className="Header-logo">
                    <img src={logo} alt="logo" className="Header-logoImage"/>
                    <p className="Header-logoText">Abibas</p>
                </div>
                <nav data-mobile-view={this.state.openMenu} className="Header-nav">
                    <div className="Header-navItem">Домашня</div>
                    <div className="Header-navItem">Товари</div>
                    <div className="Header-navItem">Контакти</div>
                    <div className="Header-navItem">Про нас</div>
                </nav>
                <div className="Header-controlls">
                    <button onClick={this.props.themeHandler} className="Header-btn Header-themeBtn"><img src={this.props.theme === "night" ? night : day} alt="theme switch" /></button>
                    <button onClick={this.basketHandle} data-count={this.props.basket.length} className="Header-btn Header-cartBtn"><img src={cart} alt="cart" /></button>
                    <button onClick={this.menuHandle} className="Header-btn Header-menuBtn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                </div>
                <BasketMenu sendOrder={this.props.sendOrder} basketRemover={this.props.basketRemover} open={this.state.openBasket} basket={this.props.basket} theme={this.props.theme}/>
            </header>
        )
    }
}

export default Header