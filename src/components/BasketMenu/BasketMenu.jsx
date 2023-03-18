import "./BasketMenu.css"

import BasketCard from "../BasketCard/BasketCard";

function BasketMenu (props){
    let basket = props.basket;
    return (
        <div data-shown={props.open} data-theme={props.theme} className="BasketMenu">
            <h3 className="BasketMenu-headline">Кошик:</h3>
            <div className="BasketMenu-container">
                {
                    (basket.length !== 0 ) ? props.basket.map(item=>{return <BasketCard basketRemover={props.basketRemover} data={item}/>}): "Порожньо"
                } 
                {
                    (basket.length !== 0 ) ? `До сплати: ${basket.reduce((acc, value)=>{return acc + parseInt(value.price)}, 0)}${basket[0].currency}` : ""
                }
            </div>
        </div>
    )
}

export default BasketMenu