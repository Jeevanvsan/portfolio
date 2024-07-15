import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import './Intro.css'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    const currentYear = new Date().getFullYear();
    const age =  currentYear - 2001 

    // const scrollRef = useRef(); 

    useGSAP(() =>{
        gsap.to('.intro-text',{
            opacity:1,
            duration:2.5,
            ease: 'power1.inOut',
            stagger:{
                amount:0.5
            } 
        }) 
    },[])


  return (
    <section className="w-full nav-height relative">
        <div className="h-screen w-full flex-center flex-col">
            <p 
            className="intro1-txt intro-text mt-40 text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10">
                Hi, I am Jeevan Varghese.
            </p>
            <p
            className="intro2-txt intro-text mt-2 text-center font-semibold  text-gray-500 opacity-0 max-md:mb-10"
            >
                {age} years old Software developer & Data Analyst.
            </p>
           
        </div>
        
    </section>
    
  )
}

export default Intro