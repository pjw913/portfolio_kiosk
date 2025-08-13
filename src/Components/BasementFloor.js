import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';


function BasementFloor({goUp, goDown}){
    const category = [
        {
            id:1,
            image:'/images/restroom_w.png',
            alt:'화장실'
        },
        {
            id:2,
            image:'/images/mcdonalds.png',
            alt:'맥도날드'
        },
        {
            id:3,
            image:'/images/koreanfood_w.png',
            alt:'한식'
        },
        {
            id:4,
            image:'/images/starbucks.png',
            alt:'스타벅스'
        },
        {
            id:5,
            image:'/images/ramen_w.png',
            alt:'라멘'
        },
        {
            id:6,
            image:'/images/bread_w.png',
            alt:'베이커리'
        },
        {
            id:7,
            image:'/images/elevator_w.png',
            alt:'엘리베이터'
        },
        {
            id:8,
            image:'/images/escalator_w.png',
            alt:'에스컬레이터'
        },
        {
            id:9,
            image:'/images/store_w.png',
            alt:'편의점'
        },
        {
            id:10,
            image:'/images/ct_w.png',
            alt:'CT'
        },
        {
            id:11,
            image:'/images/xray_w.png',
            alt:'X-RAY'
        },
        {
            id:12,
            image:'/images/mri_w.png',
            alt:'MRI'
        },
        {
            id:13,
            image:'/images/radiology_w.png',
            alt:'영상의학과'
        },
        {
            id:14,
            image:'/images/radio_cancer_w.png',
            alt:'방사선종양학과'
        },
        {
            id:15,
            image:'/images/nuclear_atom_w.png',
            alt:'핵의학과'
        },
    ];

    const containerRef = useRef(null);

    useEffect(()=>{
        const q = gsap.utils.selector(containerRef);

        gsap.fromTo(
            q(".basement-floor-components, .basement-list, h1"),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }
        );

        const listItems = q(".basement-list li");
        const floorComponents = q(".basement-floor-components > div");

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
        <section className="basement-floor" ref={containerRef}>
            <header className="basement-floor-header">
            <h1>B1F</h1>
            <div className="floorBtn">
                <button className="upfloor" onClick={goUp}><img src="/images/arrow.png" alt="upfloor" /></button>
                <button className="downfloor" onClick={goDown} disabled><img src="/images/arrow.png" alt="downfloor" /></button>
            </div>
            </header>
            <div className="basement-floor-components">
                <div className="restroom"><img src="/images/restroom.png" alt="restroom" /></div>
                <div className="mcdonald"><img src="/images/mcdonalds.png" alt="mcdonald" /></div>
                <div className="koreanfood"><img src="/images/koreanfood.png" alt="koreanfood" /></div>
                <div className="starbucks"><img src="/images/starbucks.png" alt="starbucks" /></div>
                <div className="ramen"><img src="/images/ramen.png" alt="ramen" /></div>
                <div className="bread"><img src="/images/bread.png" alt="bread" /></div>
                <div className="elevator"><img src="/images/elevator.png" alt="elevator" /></div>
                <div className="escalator"><img src="/images/escalator.png" alt="escalator" /></div>
                <div className="store"><img src="/images/store.png" alt="store" /></div>
                <div className="ct"><img src="/images/ct.png" alt="ct" /></div>
                <div className="xray"><img src="/images/xray.png" alt="xray" /></div>
                <div className="mri"><img src="/images/mri.png" alt="mri" /></div>
                <div className="radiology"><img src="/images/radiology.png" alt="radiology" /></div>
                <div className="radio_cancer"><img src="/images/radio_cancer.png" alt="radio_cancer" /></div>
                <div className="nuclear_atom"><img src="/images/nuclear_atom.png" alt="nuclear_atom" /></div>
            </div>
            <ul className="basement-list">
            {
                category.map((item)=>(
                        <li key={item.id}><img src={item.image} alt={item.alt} /><p>{item.alt}</p></li>
                ))
            }
            </ul>
        </section>
    )
}

export default BasementFloor;