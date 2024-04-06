import { Hero } from '../../components/Hero/Hero';
import { MainContent } from '../../components/MainContent/MainContent';
import { TopNavbar } from '../../components/TopNavbar/TopNavbar';
import background from '../../assets/images/bg-video-2.mp4';
import './Home.css';

export const Home: React.FC = () => {
    return (
        <div>
            <div className='background-cover'>
                <video className='background-video w-100' autoPlay muted loop>
                    <source
                        src={background}
                        type='video/mp4'
                        className='video'
                    />
                </video>
                <TopNavbar />
                <Hero />
            </div>
            <div>
                <MainContent />
            </div>
        </div>
    );
};
