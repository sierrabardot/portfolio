import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ContactSection } from './components/ContactSection/ContactSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';

function App() {
    const handleScroll = (e: any) => {
        console.log('scrolled!', e.target.scrollTop);
    };

    return (
        <div onScroll={(e) => handleScroll(e)}>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path='projects' element={<ProjectsSection />} />
                    <Route path='contact' element={<ContactSection />} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    );
}

export default App;
