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
        this.addToBasket = this.addToBasket.bind(this)
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
            return {
                basket: [...state.basket, item]
            }
        })
        console.log(this.state.basket)
    }
    render() {
        return (
            <div className="App" data-theme={this.state.theme}>
                <Header basket={this.state.basket} themeHandler={this.changeTheme} theme={this.state.theme}/>
                <Main addToBasketHandler={this.addToBasket} goodsData={this.goods}/>
            </div>
        )
    }
}

export default App