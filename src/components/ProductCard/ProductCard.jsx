import { useState } from "react"
import { gsap } from "gsap"
import "./ProductCard.css"

import cart from "./img/cart.png"
import ball from "./img/ball.png"

import GoodsPopup from "../GoodsPopup/GoodsPopup"

function ProductCard (props) {
    let [popupOpen, setPopupOpen] = useState(false);
    function cartHandler () {
        const cartPosition = document.querySelector(".Header-cartBtn").getBoundingClientRect();
        const startPosition = document.querySelector(`#ProductCard-${props.data.id} .ProductCard-buyBtn`).getBoundingClientRect();
        console.log(startPosition)
        let blinker = `#ProductCard-${props.data.id} .ProductCard-blinker`;
        let tl = gsap.timeline();
        tl.set(blinker, {position: "fixed", zIndex: 0, top: startPosition.y + "px", left: startPosition.x + "px"})
        tl.set(blinker, {zIndex: 10000})
        tl.to(blinker, {
            top: cartPosition.y + 10,
            left: cartPosition.x + 10,
            rotation: 270,
            duration: 0.8,
            ease: "back.in(1.7)"
        })
        tl.to(blinker, {
            filter: "blur(10px)",
            duration: 0.3
        })
        tl.set(blinker, {
            position: "absolute",
            top: "15px",
            right: "15px",
            left: "auto",
            filter: "blur(0)",
            zIndex: 0
        })
        props.addToBasketHandler(props.data)
    }
    return (
        <div id={"ProductCard-" + props.data.id} className="ProductCard">
            <GoodsPopup data={props.data} addToBasketHandler={cartHandler} removerFunction={()=>setPopupOpen(false)} visibility={popupOpen}/>
            <img className="ProductCard-image" src={props.data.image} alt={props.data.id + " ball card"}/>
            <div className="ProductCard-info">
                <h3 className="ProductCard-headline">{props.data.name}</h3>
                <p className="ProductCard-text ProductCard-price">{props.data.price + props.data.currency}</p>
                <div className="ProductCard-buttons">
                    <button onClick={()=>setPopupOpen(true)} className="ProductCard-btn ProductCard-infoBtn">Дізнатись більше</button>
                    <div className="ProductCard-btnWrap">
                        <button onClick={cartHandler} className="ProductCard-btn ProductCard-buyBtn"><img src={cart} alt="cart" /> </button>
                        <img className="ProductCard-blinker" src={ball} alt="O" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard