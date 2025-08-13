import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

function ThirdFloor({goUp, goDown}){
    const category = [
        {
            id:1,
            img:'/images/restroom_w.png',
            alt:'화장실'
        },
        {
            id:2,
            img:'/images/robot_surgery_w.png',
            alt:'로봇수술상담실'
        },
        {
            id:3,
            img:'/images/thyroid_w.png',
            alt:'갑상선외과센터'
        },
        {
            id:4,
            img:'/images/breast_w.png',
            alt:'유방외과센터'
        },
        {
            id:5,
            img:'/images/pregnant_w.png',
            alt:'산부인과'
        },
        {
            id:6,
            img:'/images/elevator_w.png',
            alt:'엘리베이터'
        },
        {
            id:7,
            img:'/images/escalator_w.png',
            alt:'에스컬레이터'
        },
        {
            id:8,
            img:'/images/pain_w.png',
            alt:'통증센터'
        },
        {
            id:9,
            img:'/images/spine_w.png',
            alt:'척추센터'
        },
        {
            id:10,
            img:'/images/surgery_w.png',
            alt:'수술/외과센터'
        },
        {
            id:11,
            img:'/images/anesthesia_w.png',
            alt:'마취센터'
        },
        {
            id:12,
            img:'/images/cancerous_cell_w.png',
            alt:'암통합지원센터'
        },
        {
            id:13,
            img:'/images/stomach_w.png',
            alt:'소화기센터'
        },
        {
            id:14,
            img:'/images/scope_w.png',
            alt:'내시경센터'
        },
    ]
    const containerRef = useRef(null);

    useEffect(()=>{
        const q = gsap.utils.selector(containerRef);

        gsap.fromTo(
            q(".third-floor-components, .third-list, h1"),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }
        );

        const listItems = q(".third-list li");
        const floorComponents = q(".third-floor-components > div");

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
        <section className="third-floor" ref={containerRef}>
            <header className="third-floor-header">
            <h1>3F</h1>
            <div className="floorBtn">
                <button className="upfloor" onClick={goUp} disabled><img src="/images/arrow.png" alt="upfloor" /></button>
                <button className="downfloor" onClick={goDown}><img src="/images/arrow.png" alt="downfloor" /></button>
            </div>
            </header>
            <div className="third-floor-components">
                <div className="restroom"><img src="/images/restroom.png" alt="restroom" /></div>
                <div className="robot_surgery"><img src="/images/robot_surgery.png" alt="robot_surgery" /></div>
                <div className="thyroid"><img src="/images/thyroid.png" alt="thyroid" /></div>
                <div className="breast"><img src="/images/breast.png" alt="breast" /></div>
                <div className="pregnant"><img src="/images/pregnant.png" alt="pregnant" /></div>
                <div className="elevator"><img src="/images/elevator.png" alt="elevator" /></div>
                <div className="escalator"><img src="/images/escalator.png" alt="escalator" /></div>
                <div className="pain"><img src="/images/pain.png" alt="pain" /></div>
                <div className="spine"><img src="/images/spine.png" alt="spine" /></div>
                <div className="surgery"><img src="/images/surgery.png" alt="surgery" /></div>
                <div className="anesthesia"><img src="/images/anesthesia.png" alt="anesthesia" /></div>
                <div className="cancerous_cell"><img src="/images/cancerous_cell.png" alt="cancerous_cell" /></div>
                <div className="stomach"><img src="/images/stomach.png" alt="stomach" /></div>
                <div className="scope"><img src="/images/scope.png" alt="scope" /></div>
            </div>
            <ul className="third-list">
            {
                category.map((item)=>(
                        <li key={item.id}><img src={item.img} alt={item.alt} /><p>{item.alt}</p></li>
                ))
            }
            </ul>
        </section>
    )
}

export default ThirdFloor;