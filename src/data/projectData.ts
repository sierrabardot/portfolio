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
        details: `Freshco. is an intuitive web application tailored to meet the needs of small businesses, offering inventory and recipe management functionalities. I initially came up with the idea for Freshco. after working in Food Production and struggling to find a platform that was 1. Designed for small businesses and small operations, 2. Did not have all the 'bells and whistles' that are underused, and 3. Simple and effective.`,
        keyFeatures: [
            `MongoDB was used as a flexible and scalable nonrelational database solution. By utilising Mongoose, I ensured smooth interaction between the application and the database, facilitating seamless data operations.`,
            `Express.js and Node.js form the core of the application's backend architecture.`,
            `EJS (Embedded Javascript) was used for templating, resulting in Freshco's dynamic and fully customisable frontend interfaces. I incorporated Bootstrap later on to simplify responsiveness.`,
        ],
        tools: findTools([
            'MongoDB',
            'Express.js',
            'Node.js',
            'HTML5',
            'CSS',
            'Bootstrap',
        ]),
        images: [
            {
                url: 'project-images/freshco/landing-page.png',
                alt: 'Landing Page Screenshot',
            },
            {
                url: 'project-images/freshco/dashboard.png',
                alt: 'Dashboard Screenshot',
            },
            {
                url: 'project-images/freshco/add-recipe.png',
                alt: 'Add Recipe Screenshot',
            },
            {
                url: 'project-images/freshco/logo.png',
                alt: 'Freshco Logo',
            },
            {
                url: 'project-images/freshco/landing-page-mobile.png',
                alt: 'Responsive Landing Page Screenshot',
            },
            {
                url: 'project-images/freshco/recipe-laptop-mockup.png',
                alt: 'Recipe Page Mockup',
            },
        ],
        colours: ['#182D32', '#617C6F', '#E87E5E', '#D2F3FC', '#FDFAF3'],
    },
    {
        title: 'RentHub',
        tagline: 'Consume Less, Experience More',
        link: 'https://github.com/RentHubGA/renthub',
        details:
            'RentHub is a comprehensive renting application designed to simplify the process of renting and managing household appliances, sporting equipment, and anything you may have around the house.',
        keyFeatures: [''],
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
        images: [
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
        ],
        colours: ['', ''],
    },
    {
        title: 'Eden',
        tagline: 'Explore your Surroundings',
        link: 'https://github.com/sierrabardot/eden',
        details: `Eden is an application designed to help users discover local edible foraging spots in their area. By using the client's location, the app fetches data about nearby foraging locations and displays them on an interactive map. Users can explore these locations, view details about each spot, including the plants available, and mark their favorites for future reference.`,
        keyFeatures: [''],
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
        images: [
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
            { url: '', alt: '' },
        ],
        colours: ['', ''],
    },
];
