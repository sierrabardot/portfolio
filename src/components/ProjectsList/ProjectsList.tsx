import { projectData } from '../../data/projectData';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import styles from './ProjectsList.module.css';

export const ProjectsSection: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-4 px-md-5 mb-4'>
            <h1 className={`${styles.heading} my-4`}>Projects</h1>
            {projectData.map((project) => (
                <ProjectItem key={project.title} project={project} />
            ))}
        </div>
    );
};
