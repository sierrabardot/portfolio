import styles from './ProjectItem.module.css';
import { ProjectListProps } from '../../types';
import { ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';

export const ProjectItem: React.FC<ProjectListProps> = ({ project, index }) => {
    const stickyStart: number = index * 2;

    return (
        <>
            {/* Parallax Page 1: Project images */}

            <ParallaxLayer
                offset={stickyStart + 0.45}
                speed={2}
                className={`${styles.parallax}`}>
                <div className='d-md-flex d-none justify-content-end'>
                    <img
                        src={project.images[0].url}
                        alt={project.images[0].alt}
                        className='col-7'
                    />
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={stickyStart}
                speed={0.5}
                className={`${styles.parallax}`}>
                <div className='d-flex'>
                    <div className='row'>
                        <img
                            src={project.images[1].url}
                            alt={project.images[1].alt}
                            className={`${styles.imageParallax1} col-md-6`}
                        />
                        <img
                            src={project.images[4].url}
                            alt={project.images[4].alt}
                            className={`${styles.imageParallax1} col-md-6`}
                        />
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={stickyStart + 0.7}
                speed={4}
                className={`${styles.parallax}`}>
                <div className='d-flex justify-content-start'>
                    <img
                        src={project.images[3].url}
                        alt={project.images[3].alt}
                        className='col-12 col-md-4'
                    />
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={stickyStart + 0.3}
                speed={-5}
                className={`${styles.parallax}`}>
                <div className='d-flex justify-content-start'>
                    <img
                        src={project.images[2].url}
                        alt={project.images[2].alt}
                        className={`${styles.imageParallax3} col-md-6`}
                    />
                </div>
            </ParallaxLayer>

            {/* Parallax Page 2: Project details */}

            <ParallaxLayer
                offset={stickyStart + 1.0}
                speed={1}
                className={`${styles.parallax} p-md-3`}>
                <div className='d-flex d-md-none flex-column mb-3'>
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
                <h1>Summary</h1>
                <p>{project.details}</p>
            </ParallaxLayer>

            <ParallaxLayer
                offset={stickyStart + 1.4}
                speed={2}
                className={`${styles.parallax} p-md-3`}>
                <h1>Key Features</h1>
                <ul>
                    {project.keyFeatures.map((f) => (
                        <li>{f}</li>
                    ))}
                </ul>
            </ParallaxLayer>

            {/* Parallax Page 3: Tools */}

            <ParallaxLayer
                offset={stickyStart + 1.8}
                speed={3}
                className={`${styles.parallax} p-md-3`}>
                <h1>Tools</h1>
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

            {/* Colour Blocks */}
            <div className='container d-flex flex-column'>
                {project.colours.map((c, i) => (
                    <ParallaxLayer
                        offset={stickyStart + 1.6}
                        speed={0.5 + i}
                        style={{ right: `${i * 3}em` }}
                        className={`${styles.parallax} d-flex justify-content-end`}>
                        <div
                            className={`${styles.circle}`}
                            style={{
                                backgroundColor: `${c}`,
                            }}></div>
                    </ParallaxLayer>
                ))}
            </div>
        </>
    );
};
