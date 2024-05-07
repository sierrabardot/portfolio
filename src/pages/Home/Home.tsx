import { Hero } from '../../components/Hero/Hero';
import { MainContent } from '../../components/MainContent/MainContent';
import styles from './Home.module.css';

export const Home: React.FC = () => {
    return (
        <div>
            <div className={`${styles.backgroundCover}`}>
                <Hero />
            </div>
            <MainContent />
        </div>
    );
};
