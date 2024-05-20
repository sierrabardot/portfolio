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
            'Figma',
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
            'Figma',
        ]),
        images: [
            {
                url: 'project-images/renthub/product-page.png',
                alt: 'Product Page Screenshot',
            },
            {
                url: 'project-images/renthub/listings.png',
                alt: 'Listings Page',
            },
            {
                url: 'project-images/renthub/illustration.png',
                alt: 'Illustration of a Woman Using RentHub',
            },
            {
                url: 'project-images/renthub/landing-page-responsive.png',
                alt: 'Landing Page Screenshot',
            },
            {
                url: 'project-images/renthub/mockup.png',
                alt: 'Landing Page Mockup',
            },
        ],
        colours: ['#2C2C2C', '#6D6FFE', '#9CD4EC', '#F7B832', '#F76D32'],
    },
    {
        title: 'Eden',
        tagline: 'Explore your Surroundings',
        link: 'https://github.com/sierrabardot/eden',
        details: `Eden is an innovative web application designed to enhance the experience of discovering local edible foraging spots. Inspired by the Falling Fruit API, Eden offers a modern, user-friendly, and interactive interface to provide users with valuable information about nearby foraging locations. This solo project involved extensive research, planning, and development, resulting in a functional MVP that allows users to explore nearby locations, view details about each spot, including the plants available, and mark their favourites for future reference.`,
        keyFeatures: [
            `The app’s layout and flow were planned using Figma, ensuring an intuitive and seamless user experience. I generated user stories which guided the design and development process to meet the specific needs of foragers.`,
            `Utilised Supabase to manage the backend, taking advantage of PostgreSQL's efficient and reliable data storage. This setup ensures the integrity and easy retrieval of data.`,
            `Eden was built with React, breaking down the UI into manageable components. This modular approach facilitates smooth navigation and dynamic content updates.`,
            `Enhanced user interaction with the integration of Google Maps API for precise location visualisation.`,
            `While the MVP is complete, the project remains a work in progress with plans for additional features to further enhance user engagement and interactivity.`,
        ],
        tools: findTools([
            'React.js',
            'JavaScript',
            'Bootstrap',
            'Supabase',
            'PostgreSQL',
            'Figma',
            'Google Maps API',
            'HTML5',
            'CSS',
        ]),
        images: [
            {
                url: 'project-images/eden/landing-page.png',
                alt: 'Landing Page Screenshot',
            },
            {
                url: 'project-images/eden/map-view.png',
                alt: 'Map Page Screenshot',
            },
            {
                url: 'project-images/eden/logo.png',
                alt: 'Eden Logo',
            },
            {
                url: 'project-images/eden/dashboard-mobile.png',
                alt: 'Dashboard on Mobile',
            },
            {
                url: 'project-images/eden/mockup.png',
                alt: 'Dashboard Mockup on Laptop',
            },
        ],
        colours: ['#00380D', '#177445', '#079DD8', '#EC5B60', '#F8EEE2'],
    },
];
