import { useEffect, useRef } from 'react';
import styles from './Home.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
    
gsap.registerPlugin(ScrollTrigger)
export default function Home({introDone}){
    const topTit = "WEBPUBLISHER";
    const scroll = "SCROLL";

    const contentsRef = useRef(null)

    useEffect(() => {
        const el = contentsRef.current

        ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
                el.style.setProperty("--progress", self.progress)
            }
        })
    },[]);
    return(
        <div ref={contentsRef} className={`${styles.container} ${introDone ? styles.active : ""}`}>
            <div className={styles.inner}>
                <div className={styles.stickyCon}>
                    <div className={styles.topTit}>
                        {topTit.split("").map((word,i) => (
                            <span key={i}>
                                {word}
                            </span>
                        ))}
                    </div>
                    <div className={styles.conWrap}>
                        <div className={styles.career}>
                            <strong>WORK EXPERIENCE</strong>
                            <span>2020.12 - ing</span>
                        </div>
                        <div className={styles.link}>
                            <span><a href="">E-MAIL<br/>E-MAIL</a></span>
                            <span><a href="">GIT<br/>GIT</a></span>
                            <span><a href="">NOTION<br/>NOTION</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.scroll}>
                {scroll.split("").map((word,i) => (
                    <span key={i}>{word}</span>
                ))}
            </div>
        </div>
    );
}