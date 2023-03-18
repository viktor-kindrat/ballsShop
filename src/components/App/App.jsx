import React from "react";
import "./App.css"

import goods from "../../data/goods.json"

import Header from "../Header/Header";
import Main from "../Main/Main"

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: localStorage.getItem("color-theme") || "night"
        }
        this.goods = goods
        this.changeTheme = this.changeTheme.bind(this)
    }
    changeTheme(){
        this.setState(state=> {
            return {
                theme: state.theme === "day" ? "night": "day"
            }
        })
        localStorage.setItem("color-theme", this.state.theme === "day" ? "night": "day")
    }
    render() {
        return (
            <div className="App" data-theme={this.state.theme}>
                <Header themeHandler={this.changeTheme} theme={this.state.theme}/>
                <Main/>
            </div>
        )
    }
}

export default App