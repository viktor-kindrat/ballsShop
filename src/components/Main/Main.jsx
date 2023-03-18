import React from "react";
import "./Main.css"

import Home from "../Home/Home";

class Main extends React.Component {
    render(){
        return(
            <main className="Main">
                <Home/>
            </main>
        )
    }
}

export default Main