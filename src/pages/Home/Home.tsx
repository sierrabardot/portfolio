import { Hero } from '../../components/Hero/Hero';
import { MainContent } from '../../components/MainContent/MainContent';
import { TopNavbar } from '../../components/TopNavbar/TopNavbar';
import './Home.css';

export const Home: React.FC = () => {
    return (
        <div>
            <div className='background-cover'>
                <TopNavbar />
                <Hero />
            </div>
            <MainContent />
        </div>
    );
};
