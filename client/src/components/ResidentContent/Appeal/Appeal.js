import './appeal.css';
import Input from '../../Input/Input';
import {useInput} from '../../../hooks/useInput';

const Appeal = () => {
    const apeal = useInput();
    return (
        <div className='appeal'>
            <Input fieldName="ТЕМА ОБРАЩЕНИЯ" inputHook={apeal}/>
            ТЕКСТ ОБРАЩЕНИЯ
            <textarea/>
            
            
        </div>
    );
}

export default Appeal;
