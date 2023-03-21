import "./GoodsPopup.css"

import cart from "./img/cart.png"

function GoodsPopup(props) {
    return(
        <div key={props.data.id} data-visibility={props.visibility} className="GoodsPopup">
            <button className="GoodsPopup-close" onClick={props.removerFunction}>
                <span></span><span></span>
            </button>
            <div className="GoodsPopup-imageWrap">
                <img className="GoodsPopup-image" src={props.data.fullImage} alt={props.data.name} />
            </div>
            <div className="GoodsPopup-group">
                <div className="GoodsPopup-description">
                    <div className="GoodsPopup-header">
                        <h3 className="GoodsPopup-headline">{props.data.name}</h3>
                        <p className="GoodsPopup-subheadline GoodsPopup-subheadlineCursive">{props.data.subheadline}</p>
                        <p className="GoodsPopup-subheadline">{props.data.price + props.data.currency}</p>
                    </div>
                    <p className="GoodsPopup-fullDescriptiop">
                        {props.data.description}
                    </p>
                    <div className="GoodsPopup-propertiesGroup GoodsPopup-propertiesGroupListed">
                        <h4 className="Goods-propertiesHeadline">Особливості:</h4>
                        <ul className="GoodsPopup-properties">
                            {
                                props.data.features.map((item, id) => (
                                    <li key={id}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="GoodsPopup-propertiesGroup">
                        <h4 className="Goods-propertiesHeadline">Доступні кольори:</h4>
                        <ul className="GoodsPopup-properties">
                            {
                                props.data.colors.map((item, id) => (
                                    <li key={id}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="GoodsPopup-btnContainer">
                    <button onClick={()=>{props.addToBasketHandler(props.data); props.removerFunction()}} className="GoodsPopup-btn"><img src={cart} alt="cart" />Додати до кошика</button>
                </div>
            </div>
        </div>
    )
}

export default GoodsPopup