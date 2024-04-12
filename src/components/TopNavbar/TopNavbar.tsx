import { useState, useEffect } from 'react';
import styles from './TopNavbar.module.css';

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
            className={`${
                styles.navbar
            } navbar-expand border-bottom border-black py-0 py-md-1 ${
                scrollPosition > 0 ? `${styles.scrolled}` : ``
            }`}>
            <div className='container-fluid'></div>
        </div>
    );
};
