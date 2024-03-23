import { FC } from "react";

import { PiPottedPlant } from "react-icons/pi";
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs";

import styles from './AboutUs.module.scss'

const AboutUs:FC = () => {
    return (
        <section className={styles.about_us}>
            <h2 className={styles.h2}>About us</h2>
            <p className={styles.p}>Order now and appreciate the beauty of nature</p>

            <div className={styles.about_us__flex}>
                <div className={styles.about_us__flex_item}>
                    <div className={styles.about_us__flex_item_image}>
                        <PiPottedPlant className="w-10 h-10" />
                    </div>
                    <h4 className={styles.h4}>Large Assortment</h4>
                    <p className={styles.p}>we offer many different types of products with fewer variations in each category.</p>
                </div>

                <div className={styles.about_us__flex_item}>
                    <div className={styles.about_us__flex_item_image}>
                        <BsBoxSeam className="w-10 h-10" />
                    </div>
                    <h4 className={styles.h4}>Fast & Free Shipping</h4>
                    <p className={styles.p}>4-day or less delivery time, free shipping and an expedited delivery option.</p>
                </div>

                <div className={styles.about_us__flex_item}>
                    <div className={styles.about_us__flex_item_image}>
                        <BsTelephoneOutbound className="w-10 h-10" />
                    </div>
                    <h4 className={styles.h4}>24/7 Support</h4>
                    <p className={styles.p}>answers to any business related inquiry 24/7 and in real-time.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;