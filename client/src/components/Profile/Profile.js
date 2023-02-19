import './profile.css'

import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Profile = ({role}) => {
    return (<div className='profile'>
        <div>Вы вошли как<span>{role}</span></div>
        <PrimaryButton text={<div style={{margin: '0px 30px'}}>Выйти</div>}/>
    </div>);
}

export default Profile;