import { useEffect } from "react";

import "./BasketMenu.css"

import BasketCard from "../BasketCard/BasketCard";

function BasketMenu ({sendOrder, basketRemover, open, basket, theme}){
    useEffect(() => {
        const button = document.getElementById('sendOrderBtn');
        function handleClick() {
            sendOrder(basket);
        }
        if (button) {
            button.addEventListener('click', handleClick);
        }
    
        return () => {
            if (button) {
                button.removeEventListener('click', handleClick);
            }
        };
        // eslint-disable-next-line
      }, [document.getElementById('sendOrderBtn'), basket, sendOrder]);
    return (
        <div data-shown={open} data-theme={theme} className="BasketMenu">
            <h3 className="BasketMenu-headline">Кошик:</h3>
            <div className="BasketMenu-container">
                {
                    (basket.length !== 0 ) ? basket.map((item, id)=>{return <BasketCard key={id} basketRemover={basketRemover} data={item}/>}): "Порожньо"
                } 
                {
                    (basket.length !== 0 ) ? `До сплати: ${basket.reduce((acc, value)=>{return acc + value.price * value.count}, 0)}${basket[0].currency}` : ""
                }
                {
                    (basket.length !== 0 ) ? <button id="sendOrderBtn" className="BasketMenu-btn">Сформувати замовлення</button>:""
                }
            </div>
        </div>
    )
}

export default BasketMenu