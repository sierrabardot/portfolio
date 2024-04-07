import { projectData } from './projectData';
import { Link } from 'react-router-dom';
import githubIcon from '../../assets/icons/github-mark.png';
import './ProjectSection.css';

export const ProjectsSection: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-1 px-md-5'>
            <h1 className='mb-4'>Projects</h1>
            {projectData.map((project) => (
                <div className='row mb-5'>
                    <div className='col-md-4 d-flex align-items-center'>
                        <Link to={project.link} target='_blank'>
                            <img
                                className='me-4 github-icon'
                                src={githubIcon}
                                alt='Link to GitHub repo'
                            />
                        </Link>
                        <div>
                            <h3>{project.title}</h3>
                            <h6>{project.tagline}</h6>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <p>{project.details}</p>
                        {project.tech.map((t) => (
                            <div className='m-1 btn btn-light rounded-pill'>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
