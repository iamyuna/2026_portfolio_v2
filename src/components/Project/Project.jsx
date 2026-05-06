import gsap from 'gsap';
import styles from './Project.module.scss';
import { useEffect, useRef } from 'react';
import projects from '../../data/projects.json';
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Project(){
    const projectRef = useRef(null)

    useEffect(() => {
        const slides = document.querySelectorAll(".project_slide");
        slides.forEach(slide => {
            const contentWrapper = slide.querySelector(".project_wrapper");
            const content = slide.querySelector(".panel");
            if (!contentWrapper || !content) return;
            gsap.to(content, {
                opacity: 0,
                rotationZ: (Math.random() - 0.5) * 10,
                scale: 0.7,
                rotationX: 40,
                ease: "power1.in",
                scrollTrigger: {
                    pin: contentWrapper,
                    trigger: slide,
                    start: "top 0%",
                    end: "+=" + window.innerHeight,
                    scrub: true
                }
            });
            gsap.to(content, {
                opacity: 0,
                autoAlpha: 0,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: content,
                    start: "top -100%",
                    end: "+=" + window.innerHeight,
                    scrub: true
                }
            });
        });
    },[]);
    return(
        <div className={`${styles.container}`}>
            <div>
                {projects
                    .filter(project => project.main)
                    .map(project => (
                    <div key={project.id} className={`${styles.projects} project_slide`}>
                        <div className={`${styles.project_wrapper} project_wrapper`}>
                            <section 
                            className={`${styles.panel} panel`}
                            style={{ backgroundImage: `url(${project.mainImg})` }}
                            >
                                <div className={styles.projectInner}>
                                    <strong className={styles.projectTit}>
                                        {project.title}
                                    </strong>
                                    <div className={styles.btnWrap}>
                                        {project.link ? (
                                            <a href={project.link} target="_blank">
                                                <span>
                                                    <p>VIEW SITE<br/>VIEW SITE</p>
                                                </span>
                                            </a>
                                        ) : null}
                                        {project.code ? (
                                            <a href={project.code} target="_blank">
                                                <span>
                                                    <p>VIEW GITHUB<br/>VIEW GITHUB</p>
                                                </span>
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}