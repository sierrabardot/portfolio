import { Link } from 'react-router-dom';
import styles from './ProjectItem.module.css';
import { ProjectListProps } from '../../types';

export const ProjectItem: React.FC<ProjectListProps> = ({ project }) => {
    return (
        <div key={project.title} className='row mb-5'>
            <div className='col-md-4 d-flex flex-column'>
                <div className='mb-2 d-flex align-items-center'>
                    <Link to={project.link} target='_blank'>
                        <img
                            className={`${styles.linkIcon} me-3`}
                            src='icons/link-icon.svg'
                            alt='GitHub repo'
                        />
                    </Link>
                    <div className='fs-2'>{project.title}</div>
                </div>
                <h6>{project.tagline}</h6>
            </div>
            <div className='col-md-8'>
                <p>{project.details}</p>
                <div className='d-flex flex-wrap'>
                    {project.tools.map((t) => (
                        <div
                            className={`${styles.iconBackground} d-flex justify-content-center me-md-5 me-4 my-3 flex-column bg-beige`}
                            key={t.tool}>
                            <img
                                src={t.icon}
                                className={`${styles.icon}`}
                                alt={t.tool}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='linebreak my-3'></div>
        </div>
    );
};
