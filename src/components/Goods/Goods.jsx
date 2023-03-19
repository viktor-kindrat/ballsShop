import { useMemo, useState } from "react";
import "./Goods.css"

import ProductCard from "../ProductCard/ProductCard";

function Goods(props) {
    let [filterText, setFilterText] = useState("");
    const filteredItems = useMemo(() => {
        return props.goodsData.filter(item=>item.id.toString().includes(filterText.toLowerCase()))
    }, [props.goodsData, filterText])
    return (
        <section className="Goods">
            <h2 className="Goods-headline">Каталог товарів</h2>
            <div className="BasketMenu-search">
                <input type="text" onChange={e=>{setFilterText(e.target.value)}} />
            </div>
            <div className="Goods-container">
                {
                    filteredItems.map(item => 
                        <ProductCard addToBasketHandler={props.addToBasketHandler} data={item}/>    
                    )
                }
            </div>
        </section>
    )
    
}

export default Goods