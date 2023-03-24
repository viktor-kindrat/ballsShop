import "./BasketCard.css"

import bin from "./img/bin.png"

function BasketCard (props) {
    return (
        <div key={props.data.id} className="BasketCard">
            <div className="BasketCard-imageContainer">
                <img className="BasketCard-image" src={props.data.image} alt={props.data.id + " item"} />
            </div>
            <div className="BasketCard-description">
                <h4 className="BasketCard-headline">{props.data.name}</h4>
                <p className="BasketCard-price">{props.data.price + props.data.currency + " x " + props.data.count + " = " + props.data.price * props.data.count + props.data.currency}</p>
            </div>
            <button onClick={()=>props.basketRemover(props.data)} className="BasketCard-removeBtn"><img src={bin} alt="bin" /></button>
        </div>
    )
}

export default BasketCard