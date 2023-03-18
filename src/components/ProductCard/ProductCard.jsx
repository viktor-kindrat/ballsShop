import { useState } from "react"
import "./ProductCard.css"

function ProductCard (props) {
    return (
        <div key={props.data.id} className="ProductCard">
            <img className="ProductCard-image" src={props.data.image} alt={props.data.id + " ball card"}/>
            <h3 className="ProductCard-headline">{props.data.name}</h3>
            <p className="ProductCard-text">{props.data.price + props.data.currency}</p>
            <p className="ProductCard-text">
                {
                    props.data.colors.map(item => <span className="ProductCard-color">{item}</span>)
                }
            </p>
        </div>
    )
}

export default ProductCard