import { Link } from 'react-router-dom';
import './Hero.css';
import downArrow from '../../assets/icons/down-arrow.png';
import heroImage from '../../assets/images/hero-image-2.jpg';

export const Hero: React.FC = () => {
    return (
        <div className='hero-main py-4 d-flex flex-column justify-content-around'>
            <div>
                <div className='hero d-flex justify-content-center'>
                    <img
                        className='hero-image my-md-5 mt-4 mb-5'
                        src={heroImage}
                        alt='Sierra'
                    />
                    <div className='name-sml d-md-none'>
                        Sierra Sutherland-Brown
                    </div>
                    <div className='name d-none d-md-block p-3'>
                        Sierra Sutherland-Brown
                    </div>
                </div>
                <h6 className='mb-5 fw-light'>
                    software engineer | creator of beautiful websites
                </h6>
            </div>
            <Link to='/#main'>
                <img
                    src={downArrow}
                    alt='Down arrow'
                    className='my-md-5 my-3 arrow-icon'
                />
            </Link>
        </div>
    );
};
