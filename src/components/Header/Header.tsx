import styles from './Header.module.scss';

import { Link, useLocation } from "react-router-dom";

import { BsCart } from "react-icons/bs";

const Header = () => {
    const {pathname} = useLocation();

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <Link to="/">GREENMIND</Link>

                <nav className={styles.nav}>
                    <Link 
                        to="/" 
                        className={styles.link} 
                        style={{color: pathname === '/' ? 'black' : ''}}>
                            Home
                    </Link>
                    <Link 
                        to="/products" 
                        className={styles.link} 
                        style={{color: pathname === '/products' ? 'black' : ''}}>
                            Products
                    </Link>
                    <Link 
                        to="/contacts" 
                        className={styles.link} 
                        style={{color: pathname === '/contacts' ? 'black' : ''}}>
                            Contacts
                    </Link>
                </nav>
            </div>
            <div className={styles.cart}>
                <Link 
                    to='/cart'>
                    <BsCart 
                        height={24} 
                        width={24}/>
                </Link>
            </div>
        </header>
    );
};

export default Header;