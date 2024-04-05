import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <div className='hero-main py-4'>
            <div className='hero d-flex justify-content-center '>
                <div className='name p-3'>Sierra Sutherland-Brown</div>
                <div className='placeholder my-5'></div>
            </div>
            <div>
                <h5 className='mb-5 px-3 fw-semibold'>
                    Software Engineer // Creator of Beautiful Things
                </h5>
                <Link to='/#main'>
                    <img
                        src='/down-arrow.png'
                        alt='Down arrow'
                        className='arrow-icon'
                    />
                </Link>
            </div>
        </div>
    );
};
