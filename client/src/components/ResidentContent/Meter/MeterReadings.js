import './meterReadings.css';
import {useInput} from '../../../hooks/useInput';
import PrimaryLightButton from '../../PrimaryLightButton/PrimaryLightButton';
import Input from '../../Input/Input';

const MeterReadings = () => {
    const hot = useInput();
    const cold = useInput();
    const electricity = useInput();
    return (
        <div className='meter-readings'>
            <div className='readings'>  
                    <Input fieldName="ГОРЯЧАЯ ВОДА" style={{width:"10px;"}}inputHook={hot}/>
                    <Input fieldName="ХОЛОДНАЯ ВОДА" inputHook={cold}/>
                    <Input fieldName="ЭЛЕКТРИЧЕСТВО" inputHook={electricity}/>
            </div>    
            <PrimaryLightButton text={"ПЕРЕДАТЬ ПОКАЗАНИЯ"}/>     
        </div>
    );
};

export default MeterReadings;