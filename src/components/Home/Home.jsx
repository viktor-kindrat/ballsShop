import React from "react";
import "./Home.css"

import image from "./img/image.png"

class Home extends React.Component {
    render() {
        return (
            <section className="Home">
                <div className="Home-description">
                    <h1 className="Home-headline">Тут лише <span className="Home-headlineBlue">найкращі</span> м'ячі!</h1>
                    <p className="Home-text">Упевнене вдосконалення, розширення асортименту товарів, синергетичне поєднання та відкритість гармонійної команди забезпечили організації успіх і провідну роль на світовому ринку.</p>
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