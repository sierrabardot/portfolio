import { ToolsListProps } from '../../types';

export const ToolsList = ({ title, tools }: ToolsListProps) => {
    return (
        <div className='d-flex flex-column align-items-center mb-4'>
            <h5 className='mb-4'>{title}</h5>
            <div className='d-flex justify-content-center flex-wrap'>
                {tools.map((t) => (
                    <div
                        className='d-flex mx-3 flex-column align-items-center'
                        key={t.tool}>
                        <img
                            src={t.icon}
                            className='icon mx-md-4 mb-1'
                            alt={t.tool}
                        />
                        <p className='small'>{t.tool}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
