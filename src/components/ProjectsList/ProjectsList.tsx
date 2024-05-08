import { projectData } from '../../data/projectData';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import styles from './ProjectsList.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const ProjectsSection: React.FC = () => {
    return (
        <div className={`container-fluid ${styles.projectsSection}`}>
            <h1 className={`${styles.heading} my-4`}>Projects</h1>

            <Parallax
                className={`${styles.parallax}`}
                pages={projectData.length}>
                {projectData.map((project, index) => (
                    <div
                        key={project.title}
                        className={`${styles.parallaxItem}`}>
                        <ParallaxLayer
                            offset={index}
                            speed={1.5}
                            className={`${styles.parallaxLayer}`}>
                            <ProjectItem project={project} />
                        </ParallaxLayer>
                    </div>
                ))}
            </Parallax>
        </div>
    );
};
