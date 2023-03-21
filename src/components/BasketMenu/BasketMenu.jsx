import { useEffect } from "react";

import "./BasketMenu.css"

import BasketCard from "../BasketCard/BasketCard";

function BasketMenu (props){
    let basket = props.basket;
    useEffect(() => {
        const button = document.getElementById('sendOrderBtn');
        function handleClick() {
            props.sendOrder(basket);
        }
        if (button) {
            button.addEventListener('click', handleClick);
        }
    
        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
      }, [document.getElementById('sendOrderBtn'), basket]);
    return (
        <div data-shown={props.open} data-theme={props.theme} className="BasketMenu">
            <h3 className="BasketMenu-headline">Кошик:</h3>
            <div className="BasketMenu-container">
                {
                    (basket.length !== 0 ) ? props.basket.map((item, id)=>{return <BasketCard key={id} basketRemover={props.basketRemover} data={item}/>}): "Порожньо"
                } 
                {
                    (basket.length !== 0 ) ? `До сплати: ${basket.reduce((acc, value)=>{return acc + parseInt(value.price)}, 0)}${basket[0].currency}` : ""
                }
                {
                    (basket.length !== 0 ) ? <button id="sendOrderBtn" className="BasketMenu-btn">Сформувати замовлення</button>:""
                }
            </div>
        </div>
    )
}

export default BasketMenu