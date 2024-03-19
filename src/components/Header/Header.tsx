import './header.module.scss';

import { Link, useLocation } from "react-router-dom";

import { BsCart } from "react-icons/bs";

const Header = () => {
    const {pathname} = useLocation();

    return (
        <header className="flex justify-between content-center py-10 text-2xl font-bold">
            <div className="flex justify-start content-center">
                <div className="logo">
                    <Link to="/">GREENMIND</Link>
                </div>

                <nav className='flex justify-between gap-12 ml-24 font-normal text-gray-400 pb-3'>
                    <Link to="/" className='pb-2 hover:border-b-2 hover:border-black transition-all' style={{color: pathname === '/' ? 'black' : ''}}>Home</Link>
                    <Link to="/products" className='pb-2 hover:border-b-2 hover:border-black transition-all' style={{color: pathname === '/products' ? 'black' : ''}}>Products</Link>
                    <Link to="/contacts" className='pb-2 hover:border-b-2 hover:border-black transition-all' style={{color: pathname === '/contacts' ? 'black' : ''}}>Contacts</Link>
                </nav>
            </div>
            <div className="cursor-pointer text-black hover:bg-gray-100 hover:shadow-md rounded-full p-2 h-fit">
                <Link to='/cart'>
                    <BsCart height={24} width={24}/>
                </Link>
            </div>
        </header>
    );
};

export default Header;