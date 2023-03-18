import React from "react";
import "./Goods.css"

import ProductCard from "../ProductCard/ProductCard";

class Goods extends React.Component {
    render(){
        return (
            <section className="Goods">
                <h2 className="Goods-headline">Каталог товарів</h2>
                <div className="Goods-container">
                    {
                        this.props.goodsData.map(item => 
                            <ProductCard addToBasketHandler={this.props.addToBasketHandler} data={item}/>    
                        )
                    }
                </div>
            </section>
        )
    }
}

export default Goods