import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { Profile } from '../../components/Profile/Profile';
import { ScrollToHashElement } from '../../components/ScrollToHashElement/ScrollToHashElement';
import { Footer } from '../../components/Footer/Footer';
import './MainContent.css';

export const MainContent: React.FC = () => {
    const [profile, setProfile] = useState<boolean>(true);

    return (
        <div className='main-content'>
            <ScrollToHashElement />
            <Navbar setProfile={setProfile} />
            {profile !== false && <Profile />}
            <Outlet />
            <Footer />
        </div>
    );
};
