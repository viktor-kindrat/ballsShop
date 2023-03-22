import { useEffect } from 'react';
import Typed from 'typed.js';

import "./Home.css"


function Home (props) {
    useEffect(()=>{
        let typed;
        if (document.querySelector('.Home-headlineBlue')){
            let options = {
                strings: ['неперевершені', 'найкращі', 'суперові', 'професійні'],
                loop: true,
                showCursor: true,
                cursorChar: '|',
                loopCount: Infinity,
                backDelay: 5000,
                backSpeed: 100,
                typeSpeed: 100,
                smartBackspace: true,
              };
            typed = new Typed('.Home-headlineBlue', options);
        }

        return ()=>{
            if (document.querySelector('.Home-headlineBlue')){
                typed.destroy()
            }
        }
    })
    return (
        <section className="Home">
            <div className="Home-description">
                <h1 className="Home-headline">Тут лише <span className="Home-headlineBlue">найкращі</span> м'ячі!</h1>
                <p className="Home-text">Упевнене вдосконалення, розширення асортименту товарів, синергетичне поєднання та відкритість гармонійної команди забезпечили організації успіх і провідну роль на світовому ринку.</p>
                <button className="Home-btn">До товарів</button>
            </div>
        </section>
    )
    
}

export default Home