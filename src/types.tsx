export type Tool = {
    tool: string;
    category: Category;
    icon: string;
};

export enum Category {
    LangFrame = 0,
    Frontend = 1,
    Backend = 2,
    Management = 3,
}

export type Project = {
    title: string;
    tagline: string;
    link: string;
    details: string;
    tools: Tool[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string | null;
};

// PROP TYPES
export type ToolsListProps = {
    title: string;
    tools: Tool[];
};

export type NavbarProps = {
    setProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProjectListProps = {
    project: Project;
};
