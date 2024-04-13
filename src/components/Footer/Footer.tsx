import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='py-4 border-top border-black navbar navbar-expand justify-content-center'>
                <ul className='navbar-nav gap-5 fw-light'>
                    <li className='nav-item'>
                        <Link
                            target='_blank'
                            className={'nav-link'}
                            to='https://github.com/sierrabardot'>
                            github
                        </Link>
                    </li>
                    <li>
                        <Link
                            target='_blank'
                            className={'nav-link'}
                            to='https://www.linkedin.com/in/sierrasutherlandbrown/'>
                            linkedin
                        </Link>
                    </li>
                    <li>
                        <Link
                            target='_blank'
                            className={'nav-link'}
                            to='mailto:sierrasutherlandbrown@gmail.com'>
                            get in touch
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className='small text-white bg-dark-grey m-0 p-3'>
                    © 2024 by Sierra Sutherland-Brown
                </p>
            </div>
        </div>
    );
};
