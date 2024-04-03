import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../../types';

export const Navbar: React.FC<NavbarProps> = ({ setProfile }) => {
    const handleClick = (value: boolean) => setProfile(value);
    return (
        <div className='my-4 navbar navbar-expand justify-content-center'>
            <a name='content'>
                <ul className='navbar-nav fw-semibold mb-3'>
                    <li className='nav-item'>
                        <NavLink
                            className={'nav-link'}
                            to='/'
                            onClick={() => handleClick(true)}>
                            Profile
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            className={'nav-link'}
                            to='/projects'
                            onClick={() => handleClick(false)}>
                            Projects
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            className={'nav-link'}
                            to='/contact'
                            onClick={() => handleClick(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </a>
        </div>
    );
};
