import styles from './ContactSection.module.css';

export const ContactSection: React.FC = () => {
    return (
        <div
            className={`${styles.minHeight} container-fluid d-flex flex-column px-4 px-md-5 mb-4`}>
            <div className='row mb-5 d-flex align-items-center justify-content-center'>
                <div className='col-md-7 pe-md-5'>
                    <h1 className={`${styles.heading} my-4`}>Contact</h1>
                    <p>
                        I'm on the lookout for a new opportunity to continue
                        learning and developing my skills. Please reach out to
                        discuss potential collaborations or opportunities for
                        growth.
                    </p>
                    <p>
                        <span className='fw-bolder'>mobile:</span> 0411 512 026
                    </p>
                    <p>
                        <span className='fw-bolder'>email:</span>{' '}
                        sierrasutherlandbrown@gmail.com
                    </p>
                </div>
                <div className='col-md-5 col-8 ps-md-5'></div>
            </div>
        </div>
    );
};
