import { Link } from 'react-router-dom';
import './TopNavbar.css';
import brand from '../../assets/icons/brand.png';

export const TopNavbar: React.FC = () => {
    return (
        <div className='navbar navbar-expand border-bottom border-black py-0 py-md-3'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <img src={brand} className='mx-2 star' alt='Brand Icon' />
                </Link>
            </div>
            {/* <div className='right'>
                <Link
                    target='_blank'
                    to='mailto:sierrasutherlandbrown@gmail.com'>
                    <button className='btn btn-dark rounded-pill mx-5'>
                        Get in Touch
                    </button>
                </Link>
            </div> */}
        </div>
    );
};
