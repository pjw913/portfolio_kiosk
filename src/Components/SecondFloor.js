import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

function SecondFloor({goUp, goDown}){
    const category = [
        {
            id:1,
            img:'/images/restroom_w.png',
            alt:'화장실'
        },
        {
            id:2,
            img:'/images/brain_w.png',
            alt:'뇌혈관/신경센터'
        },
        {
            id:3,
            img:'/images/eye_w.png',
            alt:'안과센터'
        },
        {
            id:4,
            img:'/images/elevator_w.png',
            alt:'엘리베이터'
        },
        {
            id:5,
            img:'/images/escalator_w.png',
            alt:'에스컬레이터'
        },
        {
            id:6,
            img:'/images/heart_w.png',
            alt:'심혈관센터'
        },
        {
            id:7,
            img:'/images/tooth_w.png',
            alt:'치과센터'
        },
        {
            id:8,
            img:'/images/clinic_w.png',
            alt:'재활의학센터'
        },
    ];
    const containerRef = useRef(null);

    useEffect(()=>{
        const q = gsap.utils.selector(containerRef);

        gsap.fromTo(
            q(".second-floor-components, .second-list, h1"),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }
        );

        const listItems = q(".second-list li");
        const floorComponents = q(".second-floor-components > div");

        listItems.forEach((li, index)=>{
            const target = floorComponents[index];
            if(!target) return;

            const handleMouseEnter = () => target.classList.add("hovered");
            const handleMouseLeave = () => target.classList.remove("hovered");

            li.addEventListener('mouseenter', handleMouseEnter);
            li.addEventListener('mouseleave', handleMouseLeave);

            li._hoverHandlers = { handleMouseEnter, handleMouseLeave };
        });

        return () =>{
            listItems.forEach((li)=>{
                const handlers = li._hoverHandlers;
                if(handlers){
                    li.removeEventListener("mouseenter", handlers.handleMouseEnter);
                    li.removeEventListener("mouseleave", handlers.handleMouseLeave);
                }
            });
        }
    },[])
    return(
        <section className="second-floor" ref={containerRef}>
            <header className="second-floor-header">
            <h1>2F</h1>
            <div className="floorBtn">
                <button className="upfloor" onClick={goUp}><img src="/images/arrow.png" alt="upfloor" /></button>
                <button className="downfloor" onClick={goDown}><img src="/images/arrow.png" alt="downfloor" /></button>
            </div>
            </header>
            <div className="second-floor-components">
                <div className="restroom"><img src="/images/restroom.png" alt="restroom" /></div>
                <div className="brain"><img src="/images/brain.png" alt="brain" /></div>
                <div className="eye"><img src="/images/eye.png" alt="eye" /></div>
                <div className="elevator"><img src="/images/elevator.png" alt="elevator" /></div>
                <div className="escalator"><img src="/images/escalator.png" alt="escalator" /></div>
                <div className="heart"><img src="/images/heart.png" alt="heart" /></div>
                <div className="tooth"><img src="/images/tooth.png" alt="tooth" /></div>
                <div className="clinic"><img src="/images/clinic.png" alt="clinic" /></div>
            </div>
            <ul className="second-list">
            {
                category.map((item)=>(
                        <li key={item.id}><img src={item.img} alt={item.alt} /><p>{item.alt}</p></li>
                ))
            }
            </ul>
        </section>
    )
}

export default SecondFloor;