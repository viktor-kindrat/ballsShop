import { useState } from "react"
import "./ProductCard.css"

import cart from "./img/cart.png"

import GoodsPopup from "../GoodsPopup/GoodsPopup"

function ProductCard (props) {
    let [popupOpen, setPopupOpen] = useState(false)
    return (
        <div key={props.data.id} className="ProductCard">
            <GoodsPopup data={props.data} addToBasketHandler={props.addToBasketHandler} removerFunction={()=>setPopupOpen(false)} visibility={popupOpen}/>
            <img className="ProductCard-image" src={props.data.image} alt={props.data.id + " ball card"}/>
            <h3 className="ProductCard-headline">{props.data.name}</h3>
            <p className="ProductCard-text ProductCard-price">{props.data.price + props.data.currency}</p>
            <div className="ProductCard-buttons">
                <button onClick={()=>setPopupOpen(true)} className="ProductCard-btn ProductCard-infoBtn">Дізнатись більше</button>
                <button onClick={()=>props.addToBasketHandler(props.data)} className="ProductCard-btn ProductCard-buyBtn"><img src={cart} alt="cart" /> </button>
            </div>
        </div>
    )
}

export default ProductCard