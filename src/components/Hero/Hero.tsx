import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
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
            className={` ${
                scrollPosition > 50
                    ? `${styles.sectionScrolled}`
                    : `${styles.section}`
            } fc-light-grey d-flex flex-column justify-content-between small p-md-5 py-5 px-3`}>
            {/* Background Blur Effect */}
            <img
                src='images/bg-blur.png'
                className={`${styles.backgroundBlur1}`}
            />
            <img
                src='images/bg-blur.png'
                className={`${styles.backgroundBlur2}`}
            />

            <div className='d-flex mb-5 p-0 justify-content-between'>
                <div>Sierra Sutherland-Brown</div>
                <div className={`justify-content-end`}>
                    Based in
                    <br /> Melbourne, Australia
                </div>
            </div>

            <div className=' d-flex align-items-center justify-content-between'>
                <div className='d-flex flex-column col-md-6'>
                    <h1 className={`${styles.heading} py-1 fc-off-white`}>
                        SOFTWARE ENGINEER
                    </h1>
                    <div>Driven by curiosity and problem solving.</div>
                </div>
                <img
                    src='images/sierra-img.png'
                    alt='Sierra'
                    className={`${styles.image} d-none d-md-block `}
                />
            </div>

            {/*Additional margin*/}
            <div className='my-5'></div>

            <div className='d-flex justify-content-between align-items-center'>
                <Link to='/#main'>
                    <img
                        src='icons/down-arrow.svg'
                        className={`${styles.downArrow}`}
                        alt='Scroll down'
                    />
                </Link>

                <div className={`${styles.name} fc-off-white`}>
                    Sierra Sutherland-Brown
                </div>
            </div>
        </div>
    );
};
