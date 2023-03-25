import "./BasketPopup.css"
import { useEffect } from "react"
import { gsap } from "gsap"

import BasketCard from "../BasketCard/BasketCard"

function BasketPopup(props) {
    function closeHandle () {
        let tl = gsap.timeline();
        tl.to(".BasketPopup", {
            backdropFilter: "blur(0)",
            background: "#08071200",
            duration: 0.2
        })
        tl.to(".BasketPopup-wrap", {
            yPercent: -150,
            duration: 0.4
        })
        tl.to(".BasketPopup-close", {
            opacity: 0,
            duration: 0.3
        })
        tl.set(".BasketPopup", {
            display: "none"
        })
    }

    useEffect(()=>{
        let submitBtn = document.querySelector(".BasketPopup-submit");
        let formMask = `#BasketPopup-form-`
        function sendHandle(){
            let inps = [...document.querySelectorAll(".BasketPopup-formInput")];

            let countOfFilled = inps.reduce((acc, value)=>{
                return acc + ((value.value) ? 1 : 0)
            }, 0)

            if (countOfFilled === inps.length) {
                let userInfo = {
                    name: document.querySelector(`${formMask}name`).value,
                    surname: document.querySelector(`${formMask}surname`).value,
                    adress: document.querySelector(`${formMask}adress`).value,
                    phone: document.querySelector(`${formMask}phone`).value,
                }
                console.log(userInfo)
                props.sendOrder(props.basket, userInfo);
                closeHandle();
            } else {
                alert("Fill all inputs")
            }

            inps.map(item => item.value = "")
        }
        submitBtn.addEventListener("click", sendHandle)
        return function(){
            submitBtn.removeEventListener("click", sendHandle)
        }
    // eslint-disable-next-line
    }, [document.querySelector(".BasketPopup-submit")])
    console.log(props.basket)
    return (
        <div className="BasketPopup">
            <button onClick={closeHandle} className="BasketPopup-close">
                <div></div>
                <div></div>
            </button>
            <div className="BasketPopup-wrap">
                <h2 className="BasketPopup-headline">Оформити замовлення:</h2>
                <div className="BasketPopup-group">
                    <div className="BasketPopup-goods">
                        <h3 className="BasketPopup-caption">Ваш кошик:</h3>
                        {
                            props.basket.map(item => 
                                <BasketCard key={item.id} data={item} basketRemover={props.basketRemover}/>    
                            )
                        }
                    </div>
                    <div className="BasketPopup-form">
                        <h3 className="BasketPopup-caption">Щоб надіслати замовлення заповніть форму:</h3>
                        <div className="BasketPopup-formGroup">
                            <input id="BasketPopup-form-name" type="text" placeholder="Ваше ім'я" className="BasketPopup-formInput" />
                            <input id="BasketPopup-form-surname" type="text" placeholder="Ваше прізвище" className="BasketPopup-formInput" />
                        </div>
                        <div className="BasketPopup-formGroup">
                            <input id="BasketPopup-form-adress" type="text" placeholder="Адреса доставки" className="BasketPopup-formInput" />
                        </div>
                        <div className="BasketPopup-formGroup">
                            <input id="BasketPopup-form-phone" type="text" placeholder="Ваш номер телефону" className="BasketPopup-formInput" />
                        </div>
                    </div>
                </div>
                <button className="BasketPopup-submit">Надіслати замовлення</button>
            </div>
        </div>
    )
}

export default BasketPopup