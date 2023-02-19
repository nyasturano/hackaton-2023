import './objectRegistration.css';
import Input from '../../Input/Input'
import {useInput} from '../../../hooks/useInput'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useHttp } from '../../../hooks/http.hook';

const ObjectRegistration = () => {

    const address = useInput();
    const type = useInput();
    const {request} = useHttp();

    const create = () => {
  
        request('http://localhost:5000/api/object/registration', 'POST', {"address": address.value, "type": type.value})
            .then(obj => {address.clear(); type.clear()});
    }

    return (
        <div className="object-reg-wrapper">
            <div>
                <Input fieldName={"АДРЕС"} inputHook={address}/>
                <Input fieldName={"ТИП"} inputHook={type}/>
                <PrimaryButton text={"ЗАРЕГИСТРИРОВАТЬ"} click={create}/>
            </div>
        </div>
    );

}

export default ObjectRegistration;