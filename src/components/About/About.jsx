import { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
export default function About(){
    const careerRef = useRef(null);
    const textRef = useRef(null);
    const bgCurrent = useRef(null);
    const bgNext = useRef(null);

    useEffect(() => {
        const el = careerRef.current;
        const current = bgCurrent.current;
        const next = bgNext.current;

        const careerText = ["2020","2021","2022","2024","2025","2026"]
        const totalImg = 6;

        for (let i = 1; i <= totalImg; i++) {
            const img = new Image();
            img.src = `images/career_img${i}.jpg`;
        }

        const width = el.getBoundingClientRect().width;
        document.documentElement.style.setProperty("--vw", `${width}px`);

        window.addEventListener("resize", () => {
            const width = el.getBoundingClientRect().width;
            document.documentElement.style.setProperty("--vw", `${width}px`);
            
            console.log(width);
        });

        ScrollTrigger.create({
            trigger: el,
            start: "top 50%",
            end: () => {
                return window.innerWidth <= 1023
                ? "bottom 110%"
                : "bottom 80%";
            },
            scrub: 1,
            onUpdate: (self) => {
                const total = totalImg - 1
                const progress = self.progress * total

                const index = Math.floor(progress)
                const ratio = progress - index

                current.style.backgroundImage = `url(images/career_img${index}.jpg)`
                next.style.backgroundImage = `url(images/career_img${Math.min(index + 1, totalImg)}.jpg)`

                const year = careerText[index] || careerText[careerText.length - 1]
                textRef.current.textContent = year

                el.style.setProperty("--progress", self.progress)
            }
        });

        const textUp = gsap.utils.toArray(".text-up");
        textUp.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                    toggleClass: "active",
                },
            })
        })
    },[]);
    return(
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.aboutTit}>
                    <strong className="text-up">
                        3년 6개월의 실무 경험을 가진 <span><em>웹퍼블리셔</em></span>입니다. <br/>
                        <span><em>모션과 인터랙션</em></span>을 통해 사용자 경험을 개선하는 강점을 가지고 있으며,<br/>
                        빠르고 안정적인 퍼블리싱으로 <div className={styles.mbr}></div> <span><em>완성도 높은 결과물</em></span>을 만들어냅니다.
                    </strong>
                </div>
                <div ref={careerRef} className={`${styles.careerWrap} career_wrap`}>
                    <div className={styles.career}>
                        <strong>2020</strong>
                        <strong ref={textRef}>2020</strong>
                    </div>
                    <div className={styles.careerImg}>
                        <div className={styles.bg} ref={bgCurrent}></div>
                        <div className={styles.bg} ref={bgNext}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}