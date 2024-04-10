type Tool = {
    tool: string;
    category: Category;
    icon: string;
};

enum Category {
    Frontend = 0,
    Backend = 1,
    Management = 2,
}

export const toolsData: Tool[] = [
    {
        tool: 'Bootstrap',
        category: 0,
        icon: 'icons/bootstrap.svg',
    },
    {
        tool: 'CSS',
        category: 0,
        icon: 'icons/css.svg',
    },
    {
        tool: 'Django',
        category: 1,
        icon: 'icons/django.svg',
    },
    {
        tool: 'Express.js',
        category: 1,
        icon: 'icons/expressjs.svg',
    },
    {
        tool: 'Figma',
        category: 2,
        icon: 'icons/figma.svg',
    },
    {
        tool: 'Git',
        category: 2,
        icon: 'icons/git.svg',
    },
    {
        tool: 'HTML5',
        category: 0,
        icon: 'icons/html.svg',
    },
    {
        tool: 'JavaScript',
        category: 0,
        icon: 'icons/javascript.svg',
    },
    {
        tool: 'jQuery',
        category: 0,
        icon: 'icons/jquery.svg',
    },
    {
        tool: 'MongoDB',
        category: 1,
        icon: 'icons/mongodb.svg',
    },
    {
        tool: 'Node.js',
        category: 1,
        icon: 'icons/nodejs.svg',
    },
    {
        tool: 'PostgreSQL',
        category: 1,
        icon: 'icons/postgres.svg',
    },
    {
        tool: 'Python',
        category: 1,
        icon: 'icons/python.svg',
    },
    {
        tool: 'React',
        category: 0,
        icon: 'icons/react.svg',
    },
    {
        tool: 'Supabase',
        category: 1,
        icon: 'icons/supabase.svg',
    },
    {
        tool: 'TypeScript',
        category: 0,
        icon: 'icons/typsescript.svg',
    },
];
