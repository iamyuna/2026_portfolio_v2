import { forwardRef } from 'react';
import styles from './Footer.module.scss';
import IconArrow from '../../assets/icons/IconArrow';
const Footer = forwardRef(function Footer(props, ref){

    return(
        <footer ref={ref}>
            <div className={`${styles.inner} inner`}>
                <div className={styles.botContent}>
                    <ul className={styles.infoList}>
                        <li>
                            <p>CONTACT :</p>
                            <span><a href="tel:01087456413">010 8745 6413</a></span>
                        </li>
                        <li>
                            <p>EMAIL :</p>
                            <span><a href="mailto:dbsdk95331@naver.com">dbsdk95331@naver.com</a></span>
                        </li>
                        <li>
                            <p>GITHUB :</p>
                            <span><a href="https://github.com/iamyuna/2026_portfolio_v2" target="_blank">iamyuna</a></span>
                        </li>
                    </ul>
                    <div className={styles.botText}>
                        <p className={styles.copy}>© 2026. Park Yuna Portfolio, Inc. All Rights Reserved.</p>
                        <div className={styles.viewBtn}>
                            <a href="/resume.pdf" target="_blank">
                                View Resume
                                <IconArrow/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`font-pixel rollText ${styles.rollText}`}>
                    <p>#PARK YUNA</p>
                </div>
            </div>
        </footer>
    );
});

export default Footer;