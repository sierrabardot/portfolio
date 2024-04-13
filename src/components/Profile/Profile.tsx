import { Bio } from '../Bio/Bio';
import { Tools } from '../ToolComponent/ToolComponent';

export const Profile: React.FC = () => {
    return (
        <div className='d-flex flex-column px-4 px-md-5'>
            <div className='row mb-5 d-flex align-items-center'>
                <div className='col-md-5'>
                    <img
                        src='images/profile-img.png'
                        className='w-100 p-4'
                        alt='Sierra and her dog'
                    />
                </div>
                <div className='col-md-7 ps-md-5'>
                    <Bio />
                </div>
            </div>
            <Tools />
        </div>
    );
};
