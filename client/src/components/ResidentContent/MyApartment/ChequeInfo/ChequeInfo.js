import './chequeInfo.css';
import Icon from './clip.png';
import PrimaryLightButton from '../../../PrimaryLightButton/PrimaryLightButton';

const ChequeInfo = () => {
    return (
        <div className='cheque-info'>
            <div style={{marginBottom:"20px"}}>
                <img src={Icon}/>
                <PrimaryLightButton text={"ПРИКРЕПИТЬ ФАЙЛ"} />
            </div>
            <PrimaryLightButton text={"ДОБАВИТЬ ЧЕК ОБ ОПЛАТЕ"} />
        </div>
    );
}

export default ChequeInfo;