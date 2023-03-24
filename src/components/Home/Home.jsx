import { useEffect } from 'react';
import Typed from 'typed.js';
import { gsap } from 'gsap';

import "./Home.css"


function Home (props) {
    useEffect(()=>{
        if (document.querySelector(".Home")) {
            function anim(){
                gsap.fromTo(".Home-headline", {opacity: 0}, {opacity: 1, duration: 1, ease: "power1.inOut"});
                gsap.fromTo(".Home-text, .Home-btn", {opacity: 0}, {opacity: 1, duration: 1.5, stagger: 0.2});
            }
            gsap.delayedCall(0.5, anim)
            let typed;
            if (document.querySelector('.Home-headlineBlue')){
                let options = {
                    strings: ['неперевершені', 'найкращі', 'суперові', 'професійні'],
                    loop: true,
                    showCursor: true,
                    cursorChar: '|',
                    loopCount: Infinity,
                    backDelay: 5000,
                    startDelay: 3000,
                    backSpeed: 100,
                    typeSpeed: 100,
                    smartBackspace: true,
                  };
                typed = new Typed('.Home-headlineBlue', options);
            }

            let goToBtnHandler = ()=> {
                document.querySelector("#GoodsSection").scrollIntoView({
                    behavior: 'smooth', // smooth scrolling animation
                    block: 'start', // align top of the element with top of the scrollable ancestor
                    inline: 'nearest', // scroll to the nearest edge of the element
                });
            }
            document.querySelector("#Home-toGoodsBtn").addEventListener("click", goToBtnHandler)
    
            return ()=>{
                if (document.querySelector('.Home-headlineBlue')){
                    typed.destroy();
                }
                document.querySelector(".Home-btn").removeEventListener("click", goToBtnHandler)
            }
        }
        // eslint-disable-next-line
    }, [document.querySelector(".Home")])
    return (
        <section className="Home">
            <div className="Home-description">
                <h1 className="Home-headline">Тут лише <span className="Home-headlineBlue">найкращі</span> м'ячі!</h1>
                <p className="Home-text">Упевнене вдосконалення, розширення асортименту товарів, синергетичне поєднання та відкритість гармонійної команди забезпечили організації успіх і провідну роль на світовому ринку.</p>
                <button id="Home-toGoodsBtn" className="Home-btn">До товарів</button>
            </div>
        </section>
    )
    
}

export default Home