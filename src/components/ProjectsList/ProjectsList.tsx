import { projectData } from '../../data/projectData';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import styles from './ProjectsList.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';

export const ProjectsSection: React.FC = () => {
    return (
        <div
            className={`container-fluid px-4 px-md-5 ${styles.projectsSection}`}>
            <h1 className={`${styles.heading} my-4`}>Projects</h1>

            <Parallax
                className={`${styles.parallax}`}
                pages={projectData.length * 3}>
                {projectData.map((project, index) => (
                    <>
                        <ParallaxLayer
                            sticky={{
                                start: index * 3 + 0.2,
                                end: index * 3 + 2,
                            }}
                            className={`${styles.sticky}`}>
                            <div className='d-flex flex-column'>
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
                        </ParallaxLayer>
                        <ProjectItem
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    </>
                ))}
            </Parallax>
        </div>
    );
};
