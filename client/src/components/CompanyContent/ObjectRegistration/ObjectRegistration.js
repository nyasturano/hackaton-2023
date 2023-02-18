import './objectRegistration.css';
import Input from '../../Input/Input'
import {useInput} from '../../../hooks/useInput'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const ObjectRegistration = () => {

    const addres = useInput();
    const type = useInput();

    return (
        <div className="object-reg-wrapper">
            <Input fieldName={"АДРЕС"} inputHook={addres}/>
            <Input fieldName={"ТИП"} inputHook={type}/>
            <PrimaryButton text={"Зарегистрировать объект"}/>
        </div>
    );

}

export default ObjectRegistration;