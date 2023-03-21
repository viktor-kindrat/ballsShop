import React from "react";
import "./App.css"

import goods from "../../data/goods.json"

import Header from "../Header/Header";
import Main from "../Main/Main"

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: localStorage.getItem("color-theme") || "night",
            basket: JSON.parse(localStorage.getItem("basket")) || []
        }
        this.goods = goods;

        this.changeTheme = this.changeTheme.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
        this.clearBasket = this.clearBasket.bind(this);
        this.sendOrder = this.sendOrder.bind(this)
    }
    changeTheme(){
        this.setState(state=> {
            return {
                theme: state.theme === "day" ? "night": "day"
            }
        })
        localStorage.setItem("color-theme", this.state.theme === "day" ? "night": "day")
    }
    addToBasket(item){
        this.setState(state => {
            localStorage.setItem('basket', JSON.stringify([...state.basket, item]))
            return {
                basket: [...state.basket, item]
            }
        })
    }
    removeFromBasket(item){
        let filtered = this.state.basket.filter((val) => {
            return val.id !== item.id
        })
        this.setState(()=>{
            return {
                basket: filtered
            }
        })
        localStorage.setItem("basket", JSON.stringify(filtered))
    }
    clearBasket() {
        this.setState(()=>{
            return {
                basket: []
            }
        })
        localStorage.setItem("basket", JSON.stringify([]))
    }
    sendOrder (basket) {
        let message = `Список товарів: \n \u{1F551} Час запиту: ${new Date().getHours()}:${new Date().getMinutes()}, ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}\n\n`

        basket.map((item)=>{
            message += `- ID:${item.id} ${item.name} (${item.price})\n\n`
            return ''
        })

        console.log(message)
        console.log(basket)

        fetch("https://balls-server.onrender.com/bot", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "message": message
            }),
        })
        .then((data)=> {
            this.clearBasket();
            alert("Надіслано успішно")
            console.log(data)
        })
        return
    }
    render() {
        return (
            <div className="App" data-theme={this.state.theme}>
                <Header sendOrder={this.sendOrder} basketRemover={this.removeFromBasket} basket={this.state.basket} themeHandler={this.changeTheme} theme={this.state.theme}/>
                <Main addToBasketHandler={this.addToBasket} goodsData={this.goods}/>
            </div>
        )
    }
}

export default App