import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';
import styles from './ProjectSection.module.css';

export const ProjectsSection: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-4 px-md-5 mb-4'>
            <h1 className='mb-4'>Projects</h1>
            {projectData.map((project) => (
                <div key={project.title} className='row mb-5'>
                    <div className='col-md-4 d-flex align-items-center'>
                        <Link to={project.link} target='_blank'>
                            <img
                                className={`${styles.githubIcon} me-4`}
                                src='/icons/github-mark.png'
                                alt='Link to GitHub repo'
                            />
                        </Link>
                        <div>
                            <h3>{project.title}</h3>
                            <h6>{project.tagline}</h6>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <p className='fw-light'>{project.details}</p>
                        <div className='d-flex justify-content-center flex-wrap'>
                            {project.tools.map((t) => (
                                <div
                                    className='d-flex mx-2 flex-column align-items-center'
                                    key={t.tool}>
                                    <img
                                        src={t.icon}
                                        className={`${styles.icon} mx-md-4 mb-1`}
                                        alt={t.tool}
                                    />
                                    <p className='small'>{t.tool}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
