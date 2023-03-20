import "./ProductCard.css"

import cart from "./img/cart.png"

function ProductCard (props) {
    return (
        <div key={props.data.id} className="ProductCard">
            <img className="ProductCard-image" src={props.data.image} alt={props.data.id + " ball card"}/>
            <h3 className="ProductCard-headline">{props.data.name}</h3>
            <p className="ProductCard-text ProductCard-price">{props.data.price + props.data.currency}</p>
            <div className="ProductCard-buttons">
                <button className="ProductCard-btn ProductCard-infoBtn">Дізнатись більше</button>
                <button onClick={()=>props.addToBasketHandler(props.data)} className="ProductCard-btn ProductCard-buyBtn"><img src={cart} alt="cart" /> </button>
            </div>
        </div>
    )
}

export default ProductCard