import { Bio } from '../Bio/Bio';
import { Tools } from '../ToolComponent/ToolComponent';

export const Profile: React.FC = () => {
    return (
        <div className='container-fluid d-flex flex-column px-4 px-md-5'>
            <div className='my-5 row d-flex align-items-center'>
                <div className='col-md-6'>
                    <h1 className='mb-4' style={{ fontSize: '4rem' }}>
                        Profile
                    </h1>
                    <Bio />
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-4'></div>
            </div>
            <Tools />
        </div>
    );
};
