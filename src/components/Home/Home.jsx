import React from "react";
import "./Home.css"

import image from "./img/image.png"

class Home extends React.Component {
    render() {
        return (
            <section className="Home">
                <div className="Home-description">
                    <h1 className="Home-headline">Тут лише <span className="Home-headlineBlue">найкращі</span> м'ячі!</h1>
                    <p className="Home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem vitae doloribus. Esse enim expedita voluptas qui reiciendis? Possimus, rerum!</p>
                    <button className="Home-btn">До товарів</button>
                </div>
                <div className="Home-imageContainer">
                    <img src={image} alt="The best goods here" className="Home-image" />
                </div>
            </section>
        )
    }
}

export default Home