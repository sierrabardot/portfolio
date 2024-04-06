import { Bio } from '../Bio/Bio';
import profilePhoto from '../../assets/images/profile-photo.jpg';

export const Profile: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-1 px-md-5'>
            <h1 className='mb-4'>Profile</h1>
            <div className='row'>
                <div className='col-7'>
                    <Bio />
                </div>
                <div className='col-5'>
                    <img
                        className='col-12 profile-photo'
                        src={profilePhoto}
                        alt='Sierra and her dog'
                    />
                </div>
            </div>
        </div>
    );
};
