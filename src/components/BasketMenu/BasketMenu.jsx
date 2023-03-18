import "./BasketMenu.css"

import BasketCard from "../BasketCard/BasketCard";

function BasketMenu (props){
    let basket = props.basket;
    let sendOrder = (basket) => {
        let message = "Need to deliver: \n"

        basket.map((item, index)=>{
            message += index + 1 + ". `" + item.id + " " + item.name + "`\n"
            return ''
        })

        fetch("https://balls-server.onrender.com/bot", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message
            }),
        })
        .then((res)=>res.json())
        .then((data)=> {
            alert("Надіслано успішно")
            console.log(data)
        })
        return
    }
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
                {
                    (basket.length !== 0 ) ? <button onClick={sendOrder(basket)} className="BasketMenu-btn">Сформувати замовлення</button>:""
                }
            </div>
        </div>
    )
}

export default BasketMenu