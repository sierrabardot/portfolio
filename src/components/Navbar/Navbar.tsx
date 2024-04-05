import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../../types';

export const Navbar: React.FC<NavbarProps> = ({ setProfile }) => {
    const handleClick = (value: boolean) => setProfile(value);
    return (
        <div
            id='main'
            className='my-4 navbar navbar-expand justify-content-center'>
            <ul className='navbar-nav fw-light mb-3'>
                <li className='nav-item'>
                    <NavLink
                        className={'nav-link'}
                        to='/'
                        onClick={() => handleClick(true)}>
                        profile
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        className={'nav-link'}
                        to='/projects'
                        onClick={() => handleClick(false)}>
                        projects
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        className={'nav-link'}
                        to='/contact'
                        onClick={() => handleClick(false)}>
                        contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
