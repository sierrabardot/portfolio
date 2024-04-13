import { ToolsListProps } from '../../types';
import styles from './ToolsList.module.css';

export const ToolsList = ({ title, tools }: ToolsListProps) => {
    return (
        <div className='d-flex flex-column mb-4'>
            <h5 className='fw-light'>{title}</h5>
            <div className='linebreak my-3'></div>
            <div className='d-flex flex-wrap'>
                {tools.map((t) => (
                    <div
                        className={`${styles.iconBackground} d-flex justify-content-center me-3 my-3 flex-column bg-beige`}
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
    );
};
