import styles from './Banner.module.scss';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <article className={styles.content}>
                <h1 className={styles.header}>Buy your dream plants</h1>
                <div className={styles.statistics}>
                    <div className={styles.statistics_item}>
                        <h4 className={styles.statistics_item_title}>50+</h4>
                        <p className={styles.statistics_item_text}>Plant Species</p>
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.statistics_item}>
                        <h4 className={styles.statistics_item_title}>100+</h4>
                        <p className={styles.statistics_item_text}>Customers</p>
                    </div>
                </div>

                <Link to='/products' className={styles.link}>View catalog ➜</Link>

            </article>
            <div className={styles.banner_image}>
                <img src="/assets/banner-flower.png" alt="banner-flower" className={styles.image_flower}/>

                <img src="/assets/banner-arrow-top.svg" alt="banner-arrow-top" className='w-28 h-40 absolute top-5 -right-10 z-0'/>
                <img src="/assets/banner-arrow-left.svg" alt="banner-arrow-left" className='w-40 h-28 absolute top-80 -left-60 z-0'/>
            </div>
        </section>
    );
};

export default Banner;