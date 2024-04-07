import { Link } from 'react-router-dom';
import './TopNavbar.css';
import { useState, useEffect } from 'react';
import brand from '../../assets/icons/brand.png';

export const TopNavbar: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`navbar navbar-expand border-bottom border-black py-0 py-md-3 ${
                scrollPosition > 0 ? ' scrolled' : ''
            }`}>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <img src={brand} className='mx-2 star' alt='Brand Icon' />
                </Link>
            </div>
        </div>
    );
};
