import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <div className=''>
            <Link to='/#main'>{/* down arrow */}</Link>
        </div>
    );
};
