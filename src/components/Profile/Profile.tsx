import { Bio } from '../Bio/Bio';
import profilePhoto from '../../assets/images/profile-photo.jpg';

export const Profile: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-4 px-md-5'>
            <h1 className='mb-4'>Profile</h1>
            <div className='row'>
                <div className='col-md-7'>
                    <Bio />
                </div>
                <div className='col-md-5 mb-3'>
                    <img
                        className='w-100 profile-photo'
                        src={profilePhoto}
                        alt='Sierra and her dog'
                    />
                </div>
            </div>
        </div>
    );
};
