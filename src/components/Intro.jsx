import {useState } from 'react';
import {useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import './Intro.css';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2001;

    const [showScrollText, setShowScrollText] = useState(false);

    useGSAP(() => {
        gsap.to('.intro-text', {
            opacity: 1,
            duration: 2.5,
            ease: 'power1.inOut',
            stagger: {
                amount: 0.5
            }
        });
    }, []);

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
        setShowScrollText(true);
    };

    return (
        <section className="intro-main w-full nav-height relative">
            <div className="w-full flex flex-col justify-center items-center">
                <p
                    className="intro1-txt intro-text mt-60 text-center font-semibold text-6xl text-gray-100 opacity-0 max-md:mb-10">
                    Hi, I am Jeevan Varghese.
                </p>
                <p
                    className="intro2-txt intro-text mt-2 text-center font-semibold text-3xl text-gray-500 opacity-0 max-md:mb-10">
                    {age} years old Software developer & Data Analyst.
                </p>
                {!showScrollText && (
                    <button 
                        className="explore-button mt-3 px-6 py-3 text-xl bg-blue-600 text-white rounded-full text-center"
                        onClick={enableScroll}>
                        Explore
                    </button>
                )}
                {showScrollText && (
                    <p className="scroll-text mt-10 text-xl text-gray-500">
                        Scroll down
                    </p>
                )}
            </div>
        </section>
    );
};

export default Intro;
