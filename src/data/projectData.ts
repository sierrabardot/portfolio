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
                url: 'project-images/freshco/view-recipe.png',
                alt: 'View Recipe Page Screenshot',
            },
            {
                url: 'project-images/freshco/dashboard.png',
                alt: 'Dashboard Screenshot',
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
                url: 'project-images/freshco/mockup.png',
                alt: 'Landing Page Mockup',
            },
        ],
        colours: ['#182D32', '#617C6F', '#E87E5E', '#D2F3FC', '#FDFAF3'],
    },
    {
        title: 'RentHub',
        tagline: 'Consume Less, Experience More',
        link: 'https://github.com/RentHubGA/renthub',
        details:
            'Renthub is a versatile renting web application designed to streamline the process of renting and managing household appliances, sporting equipment, and various household items. With a user-friendly interface and comprehensive features, Renthub empowers users to easily rent and manage their belongings, facilitating a hassle-free experience. This was a team project that was designed, developed, and deployed within 10 days of receiving the brief.',
        keyFeatures: [
            `Templates were created using Django's built in templating system whilst responsiveness and usability was enhanced with Bootstrap, Crispy Forms, and general styling with HTML/CSS. By incorpotating different solutions, we ensured ease of navigation and an effective UI.`,
            `PostgreSQL allowed us to efficiently store and retrieve data, maintaining the integrity of the product listings.`,
            `jQuery and AJAX were used to create a dynamic calendar booking system, which enables users to see blocked dates and select suitable rental dates.`,
        ],
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
            {
                url: 'project-images/renthub/landing-page.png',
                alt: 'Landing Page Screenshot',
            },
            {
                url: 'project-images/renthub/rental-mockup.png',
                alt: 'Product Page Screenshot',
            },
            {
                url: 'project-images/renthub/illustration.png',
                alt: 'RentHub Logo',
            },
            {
                url: 'project-images/renthub/landing-page-responsive.png',
                alt: 'Landing Page Screenshot',
            },
            {
                url: 'project-images/renthub/product-page.png',
                alt: 'Product Page Screenshot',
            },
        ],
        colours: ['#2C2C2C', '#6D6FFE', '#9CD4EC', '#F7B832', '#F76D32'],
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
        ],
        colours: ['', ''],
    },
];
