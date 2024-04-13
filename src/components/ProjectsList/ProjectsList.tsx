import { projectData } from '../../data/projectData';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import styles from './ProjectsList.module.css';
// import { useSpring, animated } from '@react-spring/web';

export const ProjectsSection: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-4 px-md-5 mb-4'>
            <h1 className={`${styles.heading} my-4`}>Projects</h1>
            {/* <MyComponent /> */}
            {projectData.map((project) => (
                <ProjectItem key={project.title} project={project} />
            ))}
        </div>
    );
};

// export default function MyComponent() {
//     const springs = useSpring({
//         from: { x: 0 },
//         to: { x: 100 },
//     });

//     return (
//         <animated.div
//             style={{
//                 width: 80,
//                 height: 80,
//                 background: '#ff6d6d',
//                 borderRadius: 8,
//                 ...springs,
//             }}
//         />
//     );
// }
