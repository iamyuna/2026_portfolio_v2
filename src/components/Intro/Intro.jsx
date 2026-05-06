import { useEffect, useState } from 'react';
import styles from './Intro.module.scss';
export default function Intro({onEnd}){
    const [loaded, setLoaded] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        setLoaded(true);

        const timer = setTimeout(() => {
            setShow(false);
            onEnd?.();
        }, 2300);
        return () => clearTimeout(timer);
    },[]);

    if (!show) return null;

    return(
        <div className={`${styles.container} ${loaded ? styles.intro : ''}`}>
            <div className={styles.introTit}>
                <div>
                    <span>P</span>
                    <span>Y</span>
                    <span>A</span>
                </div>
            </div>
        </div>
    );
}