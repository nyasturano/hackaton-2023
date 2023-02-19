import './objectRegistration.css';
import Input from '../../Input/Input'
import {useInput} from '../../../hooks/useInput'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { useHttp } from '../../../hooks/http.hook';

const ObjectRegistration = () => {

    const addres = useInput();
    const type = useInput();
    const {request} = useHttp();

    const create = () => {
        request('http://localhost:5000/api/object', 'POST', {addres: addres.value, type: type.value})
            .then(obj => {addres.clear(); type.clear()});
    }

    return (
        <div className="object-reg-wrapper">
            <Input fieldName={"АДРЕС"} inputHook={addres}/>
            <Input fieldName={"ТИП"} inputHook={type}/>
            <PrimaryButton text={"Зарегистрировать объект"} click={create}/>
        </div>
    );

}

export default ObjectRegistration;