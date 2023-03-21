import { useMemo, useState } from "react";
import "./Goods.css"

import ProductCard from "../ProductCard/ProductCard";

function Goods(props) {
    let [filterText, setFilterText] = useState("");
    const filteredItems = useMemo(() => {
        return props.goodsData.filter(item=>item.name.toLowerCase().includes(filterText.toLowerCase()))
    }, [props.goodsData, filterText])
    return (
        <section className="Goods">
            <h2 className="Goods-headline">Каталог товарів</h2>
            <div className="Goods-search">
                <input className="Goods-searchInput" placeholder="Введіть назву товару" type="text" onChange={e=>{setFilterText(e.target.value)}} />
            </div>
            <div className="Goods-container">
                {
                    (filteredItems.length > 0) ? filteredItems.map(item => <ProductCard key={item.id} addToBasketHandler={props.addToBasketHandler} data={item}/>) : <p className="Goods-absent">Немає товару назва якого містить "{filterText}"</p>
                }
            </div>
        </section>
    )
    
}

export default Goods