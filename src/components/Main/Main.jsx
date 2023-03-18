import React from "react";
import "./Main.css"

import Home from "../Home/Home";
import Goods from "../Goods/Goods";

class Main extends React.Component {
    render(){
        return(
            <main className="Main">
                <Home/>
                <Goods goodsData={this.props.goodsData}/>
            </main>
        )
    }
}

export default Main