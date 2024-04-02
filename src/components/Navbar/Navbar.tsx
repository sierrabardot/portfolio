import { ActivePage, NavbarProps } from '../../types';

export const Navbar: React.FC<NavbarProps> = ({ setActivePage }) => {
    const handleClick = (page: ActivePage) => {
        setActivePage(page);
    };

    return (
        <div>
            <ul>
                <li onClick={() => handleClick(null)}>Profile</li>
                <li onClick={() => handleClick('projects')}>Projects</li>
                <li onClick={() => handleClick('contact')}>Contact</li>
            </ul>
        </div>
    );
};
