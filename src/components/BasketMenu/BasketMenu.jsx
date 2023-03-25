import { useEffect } from "react";
import { gsap } from "gsap";

import "./BasketMenu.css"

import BasketCard from "../BasketCard/BasketCard";

function BasketMenu ({basketRemover, open, basket, theme}){
    useEffect(() => {
        const button = document.getElementById('sendOrderBtn');
        function handleClick() {
            let tl = gsap.timeline();
            tl.fromTo(".BasketPopup", {
                display: "none",
                backdropFilter: "blur(0)",
                background: "#08071200",
            }, {
                display: "flex",
                backdropFilter: "blur(25px)",
                background: "#08071277",
                duration: 0.2
            })
            tl.fromTo(".BasketPopup-wrap", {
                yPercent: -150
            }, {
                yPercent: 0,
                duration: 0.4
            })
            tl.fromTo(".BasketPopup-close", {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.3
            })
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
      }, [document.getElementById('sendOrderBtn')]);
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