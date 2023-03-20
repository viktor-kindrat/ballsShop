import "./GoodsPopup.css"

function GoodsPopup(props) {
    return(
        <div data-visibility={props.visibility} className="GoodsPopup">
            {props.data.name}
            <button onClick={props.removerFunction}>close</button>
        </div>
    )
}

export default GoodsPopup