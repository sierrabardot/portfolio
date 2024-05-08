import styles from './ProjectItem.module.css';
import { ProjectListProps } from '../../types';
import { ParallaxLayer } from '@react-spring/parallax';

export const ProjectItem: React.FC<ProjectListProps> = ({ project, index }) => {
    const stickyStart: number = index * 3;

    return (
        <>
            <ParallaxLayer
                offset={stickyStart}
                speed={1.5}
                className={`${styles.parallax}`}>
                {/* Placeholder for images */}
            </ParallaxLayer>

            <ParallaxLayer
                offset={stickyStart + 1}
                speed={1.5}
                className={`${styles.parallax} p-md-2`}>
                <p>{project.details}</p>
            </ParallaxLayer>

            <ParallaxLayer
                offset={stickyStart + 2}
                speed={1.5}
                className={`${styles.parallax}`}>
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
            </ParallaxLayer>
        </>
    );
};
