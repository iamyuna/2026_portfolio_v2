import { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import skills from '../../data/skills.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default function Skills(){
    const skillsRef = useRef(null);

    useEffect(() => {

        const text = gsap.utils.toArray(".skills_text");
        text.forEach((el) => {
            gsap.fromTo(el, 
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 60%",
                        scrub: true,
                    }
                }
            );
        })

        const skillsCon = skillsRef.current;
        const skills = gsap.utils.toArray(".skill");
        skills.forEach((el, i) => {
            gsap.fromTo(el, 
                {
                    x: 50,
                    y: 50,
                    rotate: 30,
                    opacity: 0,
                },
                {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: `top ${70 + i}%`,
                        end: "top 50%",
                        toggleClass: "active",
                        scrub: true,
                    }
                }
            );
        });
    },[]);

    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.skillsText}>
                    <strong>
                        <span className="skills_text">#USER EXPERIENCE FOCUS</span>
                        <span className="skills_text">#CREATIVE PROBLEM SOLVING</span>
                        <span className="skills_text">#INTERACTIVE MOTION DESIGN</span>
                    </strong>
                </div>
                <div ref={skillsRef} className={styles.skillsWrap}>
                    <ul className={styles.skillsList}>
                        {skills.map(skill => (
                            <li key={skill.id} className="skill">
                                <img src={skill.icon} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}