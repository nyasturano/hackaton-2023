import './report.css';
import Icon from './clip.png';
import PrimaryLightButton from '../../PrimaryLightButton/PrimaryLightButton';

const Report = () => {
    return (
        <div className='report'>
            <div>
                <img src={Icon}/>
                <PrimaryLightButton text={"ПРИКРЕПИТЬ ФАЙЛ"} />
            </div>
            <PrimaryLightButton text={"ОТПРАВИТЬ ОТЧЁТНОСТЬ"} />
        </div>
    );
}

export default Report;