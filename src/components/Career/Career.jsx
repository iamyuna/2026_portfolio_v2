import { useEffect, useRef } from 'react';
import styles from './Career.module.scss';
import gsap from 'gsap';
import career from '../../data/career.json';
export default function Career(){
    const careerConRef = useRef(null);

    useEffect(() => {
        const careerUp = document.querySelector(`.${styles.careerList}`);
        gsap.fromTo(careerUp, 
            {
                y: 100,
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: careerUp,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: true,
                },
            }
        );
    },[]);
    return(
        <div ref={careerConRef} className={styles.container}>
            <div className={styles.inner}>
                <ul className={styles.careerList}>
                    {career.map(item => (
                        <li 
                            key={item.id}
                            className="career"
                            onMouseEnter={(e) => {
                                e.currentTarget.classList.add("active");
                                careerConRef.current.classList.add(`active${item.id}`);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.classList.remove("active");
                                careerConRef.current.classList.remove(`active${item.id}`);
                            }}
                        >
                            <strong>{item.title}</strong>
                            <div className={styles.careerCon}>
                                <dl>
                                    <dt>DURATION</dt>
                                    <dd>{item.duration}</dd>
                                </dl>
                                <dl>
                                    <dt>ROLE</dt>
                                    <dd>{item.role}</dd>
                                </dl>
                                <dl>
                                    <dt>SKILLS</dt>
                                    <dd>{item.skills}</dd>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}