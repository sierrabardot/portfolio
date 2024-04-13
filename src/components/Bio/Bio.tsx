import styles from './Bio.module.css';

export const Bio: React.FC = () => {
    return (
        <div className='pe-md-5 px-3 me-md-5'>
            <img
                src='icons/profile-box.svg'
                className={`${styles.icon} my-3`}
                alt='Icon of person with box of head'
            />
            <div className={`${styles.heading} mb-4`}>
                Hi there, I'm Sierra!
            </div>
            <p>
                A newly graduated Melbourne based Software Engineer who is
                passionate about writing purposeful and clean code. I'm on the
                lookout for a new opportunity to put my creative problem solving
                skills to use.
            </p>
            <p>
                When I'm not behind a screen, you can find me exploring the
                outdoors — whether it's hiking in the Dandenong Ranges with my
                cocker spaniel, planning next season's kitchen garden, or
                sneakily stealing some feijoas from my neighbour's tree.
            </p>
        </div>
    );
};
