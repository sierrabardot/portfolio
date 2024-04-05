import { Outlet } from 'react-router-dom';
import { Hero } from '../../components/Hero/Hero';
import { Navbar } from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { Profile } from '../../components/Profile/Profile';
import { ScrollToHashElement } from '../../components/ScrollToHashElement/ScrollToHashElement';

export const Home: React.FC = () => {
    const [profile, setProfile] = useState<boolean>(true);
    return (
        <div>
            <Hero />
            <ScrollToHashElement />
            <Navbar setProfile={setProfile} />
            {profile !== false && <Profile />}
            <Outlet />
        </div>
    );
};
