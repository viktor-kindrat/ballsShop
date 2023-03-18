import { useState } from "react"
import "./ProductCard.css"

import cart from "./img/cart.png"

function ProductCard (props) {
    return (
        <div key={props.data.id} className="ProductCard">
            <img className="ProductCard-image" src={props.data.image} alt={props.data.id + " ball card"}/>
            <h3 className="ProductCard-headline">{props.data.name}</h3>
            <p className="ProductCard-text ProductCard-price">{props.data.price + props.data.currency}</p>
            <p className="ProductCard-text">Кольори: 
                {
                    props.data.colors.map(item => <span className="ProductCard-color">{item}</span>)
                }
            </p>
            <button className="ProductCard-buyBtn"><img src={cart} alt="cart" /> До кошика</button>
        </div>
    )
}

export default ProductCard