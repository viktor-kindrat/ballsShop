import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Header.css"

import BasketMenu from "../BasketMenu/BasketMenu";

import logo from "./img/logo.png"
import cart from "./img/cart.png"
import day from "./img/day.png"
import night from "./img/night.png"

function Header (props){
    let [openBasket, setOpenBasket] = useState(false)
    let [openMenu, setOpenMenu] = useState(false)
    let [totalTheme, setTotalTheme] = useState(props.theme);
    let [scroll, setScroll] = useState(0);

    window.addEventListener("scroll", (e)=>{
        setScroll(window.scrollY)
    })

    function basketHandle (){
        if (openMenu === false || window.innerWidth >= 800) {
            setOpenBasket(!openBasket)
        }
    }
    function menuHandle (){
        if (openBasket === false) {
            setOpenMenu(!openMenu)
        }
    }

    useEffect(()=>{
        let tl = gsap.timeline();
        tl.fromTo(".Header-logo", {opacity: 0}, {opacity: 1, duration: 1});
        tl.fromTo(".Header-navItem", {x: -10, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, stagger: 0.2})
        tl.fromTo(".Header-btn", {x: -10, opacity: 0}, {x: 0, opacity: 1, duration: 0.6, stagger: 0.2})
    }, [])

    useEffect(()=>{
        if (window.scrollY >= 75) {
            document.querySelector("#Header").style.backdropFilter = "blur(10px)"
        } else {
            document.querySelector("#Header").style.backdropFilter = "blur(0)"
        }
        if (props.theme !== "night"){
            if (window.scrollY >= window.innerHeight - 75) {
                setTotalTheme("day")
            } else {
                setTotalTheme("night")
            }
        } else {
            setTotalTheme("night")
        }
    }, [scroll, props.theme])
    return(
         <header id="Header" className="Header" data-theme={totalTheme}>
            <div className="Header-logo">
                <img src={logo} alt="logo" className="Header-logoImage"/>
                <p className="Header-logoText">Abibas</p>
            </div>
            <nav data-mobile-view={openMenu} className="Header-nav">
                <div className="Header-navItem">Домашня</div>
                <div className="Header-navItem">Товари</div>
                <div className="Header-navItem">Контакти</div>
                <div className="Header-navItem">Про нас</div>
            </nav>
            <div className="Header-controlls">
                <button onClick={props.themeHandler} className="Header-btn Header-themeBtn"><img src={props.theme === "night" ? night : day} alt="theme switch" /></button>
                <button onClick={basketHandle} data-count={props.basket.length} className="Header-btn Header-cartBtn"><img src={cart} alt="cart" /></button>
                <button onClick={menuHandle} className="Header-btn Header-menuBtn">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

            </div>
            <BasketMenu basketRemover={props.basketRemover} open={openBasket} basket={props.basket} theme={props.theme}/>
        </header>
    )
    
}

export default Header