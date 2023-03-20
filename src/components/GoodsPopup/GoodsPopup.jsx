import "./GoodsPopup.css"

function GoodsPopup(props) {
    return(
        <div data-visibility={props.visibility} className="GoodsPopup">
            Popup
            <button onClick={props.removerFunction}>close</button>
        </div>
    )
}

export default GoodsPopup