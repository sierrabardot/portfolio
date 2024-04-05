import { Link } from 'react-router-dom';
import './TopNavbar.css';

export const TopNavbar: React.FC = () => {
    return (
        <div className='navbar navbar-expand bg-light border-bottom border-black py-3'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <img
                        src='./brand.png'
                        className=' mx-5 star'
                        alt='Brand Icon'
                    />
                </Link>
            </div>
            <div className='right'>
                <Link
                    target='_blank'
                    to='mailto:sierrasutherlandbrown@gmail.com'>
                    <button className='btn btn-dark rounded-pill mx-5'>
                        contact
                    </button>
                </Link>
            </div>
        </div>
    );
};
