export type NavbarProps = {
    setActivePage: React.Dispatch<React.SetStateAction<ActivePage>>;
};

export type ActivePage = 'projects' | 'contact' | null;
