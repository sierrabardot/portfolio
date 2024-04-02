import { useState } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Navbar } from '../../components/Navbar/Navbar';
import { Profile } from '../../components/Profile/Profile';
import { ProjectsSection } from '../../components/ProjectsSection/ProjectsSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';
import { ActivePage } from '../../types';

export const Home: React.FC = () => {
    const [activePage, setActivePage] = useState<ActivePage>(null);
    return (
        <div>
            <Hero />
            <Navbar setActivePage={setActivePage} />
            {activePage === null && <Profile />}
            {activePage === 'projects' && <ProjectsSection />}
            {activePage === 'contact' && <ContactSection />}
        </div>
    );
};
