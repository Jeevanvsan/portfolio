import "./Skill.css"
import Slider from "react-slick"
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)


const Skills = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill-main',
        start: 'top center',
        end: 'top top',
        scrub: 2
      }
    });

    tl.to('.skills_holo_div', {
      opacity: 1,
      ease:"bounce.inOut"
    });

    // Refresh ScrollTrigger to ensure everything is properly initialized
    ScrollTrigger.refresh();

    // Clean up the ScrollTrigger instance on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="skill-main w-full nav-height relative">
      <div className="skills_holo_div opacity-0">
      <Slider {...settings}>
          <div className="code-container card">
                <table>
                  <tbody>
                  <tr>
                        <td  >
                            Code languages
                        </td>
                        <td >
                            Skill levels
                        </td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td><div className="skill-level advanced"></div></td>
                    </tr>
                    <tr>
                        <td>HTML & CSS</td>
                        <td><div className="skill-level advanced"></div></td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td><div className="skill-level advanced"></div></td>
                    </tr>
                    <tr>
                        <td>SQL</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                    <tr>
                        <td>C++</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                  </tbody>
                    
                </table>
            </div>
            <div className="domain-container card">
                <table>
                  <tbody>
                  <tr>
                        <td  >
                            Domain
                        </td>
                        <td >
                            Skill levels
                        </td>
                    </tr>
                    <tr>
                        <td>Cloud</td>
                        <td><div className="skill-level advanced"></div></td>
                    </tr>
                    <tr>
                        <td>Web</td>
                        <td><div className="skill-level advanced"></div></td>
                    </tr>
                    <tr>
                        <td>Android</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                  </tbody>
                    
                </table>
            </div>
            <div className="da-container card">
                <table>
                  <tbody>
                  <tr>
                        <td  >
                            Data Analysis
                        </td>
                        <td >
                            Skill levels
                        </td>
                    </tr>
                    <tr>
                        <td>Snowflake</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                    <tr>
                        <td>Spark</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                    <tr>
                        <td>AWS</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                    <tr>
                        <td>Airflow</td>
                        <td><div className="skill-level beginner"></div></td>
                    </tr>
                    <tr>
                        <td>Postgres</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                    <tr>
                        <td>PowerBI</td>
                        <td><div className="skill-level intermediate"></div></td>
                    </tr>
                  </tbody>
                    
                </table>
            </div>
            
        </Slider>

        <div className="holo"></div>
     </div>
    </section>
  )
}

export default Skills