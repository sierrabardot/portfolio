import { Bio } from '../Bio/Bio';
import profilePhoto from '../../assets/images/profile-photo.png';
import { Tools } from '../Tools/Tools';

export const Profile: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-4 px-md-5 my-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6'>
                    <h1 className='mb-4' style={{ fontSize: '4rem' }}>
                        Profile
                    </h1>
                    <Bio />
                </div>
                <div className='col-md-6 mb-3'>
                    <img
                        className='w-100 profile-photo'
                        src={profilePhoto}
                        alt='Sierra and her dog'
                    />
                </div>
            </div>
            <Tools />
        </div>
    );
};
