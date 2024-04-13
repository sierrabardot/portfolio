import { toolsData } from './toolsData';
import { Tool, Project } from '../types';

const findTools = (toolsArr: string[]) => {
    let tools: Tool[] = [];
    toolsArr.forEach((toolName) => {
        const tool = toolsData.find((t) => t.tool === toolName);
        if (tool) {
            tools.push(tool);
        }
    });
    return tools;
};

export const projectData: Project[] = [
    {
        title: 'Freshco.',
        tagline: 'Inventory and Recipe Management',
        link: 'https://github.com/sierrabardot/freshco',
        details:
            'Freshco. is an Inventory and Recipe Management web application designed with small businesses in mind. Users can manage their inventory, create recipes, and track food productions.',
        tools: findTools(['MongoDB', 'Express.js', 'Node.js', 'HTML5', 'CSS']),
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
    },
    {
        title: 'RentHub',
        tagline: 'Consume Less, Experience More',
        link: 'https://github.com/RentHubGA/renthub',
        details:
            'RentHub is a comprehensive renting application designed to simplify the process of renting and managing household appliances, sporting equipment, and anything you may have around the house.',
        tools: findTools([
            'Python',
            'Django',
            'PostgreSQL',
            'jQuery',
            'AJAX',
            'Bootstrap',
            'HTML5',
            'CSS',
        ]),
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
    },
    {
        title: 'Eden',
        tagline: 'Explore your Surroundings',
        link: 'https://github.com/sierrabardot/eden',
        details: `Eden is an application designed to help users discover local edible foraging spots in their area. By using the client's location, the app fetches data about nearby foraging locations and displays them on an interactive map. Users can explore these locations, view details about each spot, including the plants available, and mark their favorites for future reference.`,
        tools: findTools([
            'React.js',
            'JavaScript',
            'Bootstrap',
            'Supabase',
            'PostgreSQL',
            'Google Maps API',
            'HTML5',
            'CSS',
        ]),
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
    },
];
