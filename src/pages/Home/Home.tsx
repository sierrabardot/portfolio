import { Hero } from '../../components/Hero/Hero';
import { MainContent } from '../../components/MainContent/MainContent';
import { TopNavbar } from '../../components/TopNavbar/TopNavbar';

export const Home: React.FC = () => {
    return (
        <div>
            <TopNavbar />
            <Hero />
            <MainContent />
        </div>
    );
};
