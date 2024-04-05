import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <div className='hero-main py-4'>
            <div className='hero d-flex justify-content-center '>
                <div className='placeholder my-5'></div>
                <div className='name p-3'>Sierra Sutherland-Brown</div>
            </div>
            <div>
                <h6 className='mb-5 px-3 fw-light'>
                    software engineer | creator of beautiful things
                </h6>
                <Link to='/#main'>
                    <img
                        src='./down-arrow.png'
                        alt='Down arrow'
                        className='arrow-icon'
                    />
                </Link>
            </div>
        </div>
    );
};
