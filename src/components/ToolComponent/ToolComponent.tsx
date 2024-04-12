import { toolsData } from '../../data/toolsData';
import { ToolsListProps } from '../../types';
import { ToolsList } from '../ToolsList/ToolsList';

export const Tools: React.FC = () => {
    const toolsListProps: ToolsListProps[] = [
        {
            title: 'Languages / Frameworks',
            tools: toolsData.filter((tool) => tool.category === 0),
        },
        {
            title: 'Front End',
            tools: toolsData.filter((tool) => tool.category === 1),
        },
        {
            title: 'Backend',
            tools: toolsData.filter((tool) => tool.category === 2),
        },
        {
            title: 'Management / Version Control',
            tools: toolsData.filter((tool) => tool.category === 3),
        },
    ];

    return (
        <div className='d-flex flex-column mb-4'>
            <h2 className='my-4'>Tools</h2>
            {toolsListProps.map((item) => (
                <ToolsList
                    key={item.title}
                    title={item.title}
                    tools={item.tools}
                />
            ))}
        </div>
    );
};
