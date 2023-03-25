import React from "react";
import "./App.css"

import goods from "../../data/goods.json"

import Header from "../Header/Header";
import Main from "../Main/Main"
import BasketPopup from "../BasketPopup/BasketPopup";
import Footer from "../Footer/Footer";

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
        this.setState(state=> {return {theme: state.theme === "day" ? "night": "day"}})
        localStorage.setItem("color-theme", this.state.theme === "day" ? "night": "day")
    }
    addToBasket(item){
        let it = item;
        let itemUnique = true;
        let basket = this.state.basket
        basket.map((item, index)=>{
            if (item.id === it.id) {
                basket[index].count++;
                itemUnique = false
            }
            return ""
        })

        if (itemUnique) {
            it.count = 1
            basket = [...basket, it]
        } 
        
        this.setState(() => {return {basket: basket}})

        localStorage.setItem("basket", JSON.stringify(basket))
    }

    removeFromBasket(item){
        let basket = this.state.basket;
        basket.map((val, index) => {
            if (val.id === item.id) {
                if (val.count !== 1) {
                    basket[index].count--
                } else {
                    basket[index] = ""
                }
            }
            return ""
        })
        basket = basket.filter(item => item !== "")
        this.setState(()=>{return {basket: basket}})
        localStorage.setItem("basket", JSON.stringify(basket))
    }
    clearBasket() {
        this.setState(()=>{
            return {
                basket: []
            }
        })
        localStorage.setItem("basket", JSON.stringify([]))
    }
    sendOrder (basket, info) {
        let message = `Нове замовлення: \nІм'я: ${info.name}\nПрізвище: ${info.surname}\nКонтактний номер: ${info.phone}\nАдреса доставки: ${info.adress} \nЧас запиту: ${new Date().getHours()}:${new Date().getMinutes()}, ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}\n\n`

        basket.map((item)=>{
            message += `- ID:${item.id} ${item.name} (${item.price})\nКількість: ${item.count}\n\n`
            return ''
        })

        console.log(basket)
        message+=`\u{1F4B8} Усього до сплати: ${basket.reduce((acc, val)=>{return acc + val.price * val.count}, 0)}${basket[0].currency}`

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
        .catch(error=>{
            alert("Error, please reload and try again")
            console.log(error)
        })
        return
    }
    render() {
        return (
            <div className="App" data-theme={this.state.theme}>
                <Header basketRemover={this.removeFromBasket} basket={this.state.basket} themeHandler={this.changeTheme} theme={this.state.theme}/>
                <BasketPopup sendOrder={this.sendOrder} basketRemover={this.removeFromBasket} basket={this.state.basket}/>
                <Main addToBasketHandler={this.addToBasket} goodsData={this.goods}/>
                <Footer/>
            </div>
        )
    }
}

export default App