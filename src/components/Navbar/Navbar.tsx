import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../../types';

export const Navbar: React.FC<NavbarProps> = ({ setProfile }) => {
    const handleClick = (value: boolean) => setProfile(value);
    return (
        <div>
            <ul>
                <NavLink to='/' onClick={() => handleClick(true)}>
                    Profile
                </NavLink>
                <NavLink to='/projects' onClick={() => handleClick(false)}>
                    Projects
                </NavLink>
                <NavLink to='/contact' onClick={() => handleClick(false)}>
                    Contact
                </NavLink>
            </ul>
        </div>
    );
};
