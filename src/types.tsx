export type NavbarProps = {
    setProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

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

export type ToolsListProps = {
    title: string;
    tools: Tool[];
};
