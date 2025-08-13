import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

function FirstFloor({goUp, goDown}){
    const category = [
        {
            id:1,
            img:'/images/restroom_w.png',
            alt:'화장실'
        },
        {
            id:2,
            img:'/images/derma_w.png',
            alt:'피부과'
        },
        {
            id:3,
            img:'/images/kids_w.png',
            alt:'소아청소년과'
        },
        {
            id:4,
            img:'/images/emergency_w.png',
            alt:'응급의료센터'
        },
        {
            id:5,
            img:'/images/elevator_w.png',
            alt:'엘리베이터'
        },
        {
            id:6,
            img:'/images/escalator_w.png',
            alt:'에스컬레이터'
        },
        {
            id:7,
            img:'/images/info_w.png',
            alt:'통합창구'
        },
        {
            id:8,
            img:'/images/bone_surgery_w.png',
            alt:'정형외과'
        },
        {
            id:9,
            img:'/images/pharmacy_w.png',
            alt:'약국'
        },
        {
            id:10,
            img:'/images/entrance_w.png',
            alt:'출/입구'
        },
        {
            id:11,
            img:'/images/injection_w.png',
            alt:'주사실'
        },
        {
            id:12,
            img:'/images/blood_w.png',
            alt:'채혈실'
        },
    ]; 

    const containerRef = useRef(null);

    useEffect(()=>{
        const q = gsap.utils.selector(containerRef);

        gsap.fromTo(
            q(".first-floor-components, .first-list, h1"),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }
        );

        const listItems = q(".first-list li");
        const floorComponents = q(".first-floor-components > div");

        listItems.forEach((li, index)=>{
            const item = category[index];
            if (!item) return;

            let targets = [];

            if (item.alt === "정형외과") {
                targets = Array.from(
                q(".first-floor-components .bone_surgery1, .first-floor-components .bone_surgery2")
                );
            } else {
                const floorComponents = q(".first-floor-components > div");
                const offset = index >= 8 ? 1 : 0;
                const target = floorComponents[index + offset];
                if (target) targets.push(target);
            }

            const handleMouseEnter = () => targets.forEach((t) => t.classList.add("hovered"));
            const handleMouseLeave = () => targets.forEach((t) => t.classList.remove("hovered"));

            li.addEventListener("mouseenter", handleMouseEnter);
            li.addEventListener("mouseleave", handleMouseLeave);

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
        <section className="first-floor" ref={containerRef}>
            <header className="first-floor-header">
            <h1>1F</h1>
            <div className="floorBtn">
                <button className="upfloor" onClick={goUp}><img src="/images/arrow.png" alt="upfloor" /></button>
                <button className="downfloor" onClick={goDown}><img src="/images/arrow.png" alt="downfloor" /></button>
            </div>
            </header>
            <div className="first-floor-components">
                <div className="restroom"><img src="/images/restroom.png" alt="restroom" /></div>
                <div className="derma"><img src="/images/derma.png" alt="derma" /></div>
                <div className="kids"><img src="/images/kids.png" alt="kids" /></div>
                <div className="emergency"><img src="/images/emergency.png" alt="emergency" /></div>
                <div className="elevator"><img src="/images/elevator.png" alt="elevator" /></div>
                <div className="escalator"><img src="/images/escalator.png" alt="escalator" /></div>
                <div className="info"><img src="/images/info.png" alt="info" /></div>
                <div className="bone_surgery1"><img src="/images/bone_surgery.png" alt="bone_surgery" /></div>
                <div className="bone_surgery2"><img src="/images/bone_surgery.png" alt="bone_surgery" /></div>
                <div className="pharmacy"><img src="/images/pharmacy.png" alt="pharmacy" /></div>
                <div className="entrance"><img src="/images/entrance.png" alt="entrance" /></div>
                <div className="injection"><img src="/images/injection.png" alt="injection" /></div>
                <div className="blood"><img src="/images/blood.png" alt="blood" /></div>
            </div>
            <ul className="first-list">
            {
                category.map((item)=>(
                        <li key={item.id}><img src={item.img} alt={item.alt} /><p>{item.alt}</p></li>
                ))
            }
            </ul>
        </section>
    )
}

export default FirstFloor;