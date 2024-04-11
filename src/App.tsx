import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ContactSection } from './components/ContactSection/ContactSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';

function App() {
    return (
        <div>
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
