import './organizationRegistration.css';
import Input from '../../Input/Input'
import {useInput} from '../../../hooks/useInput'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const OrganizationRegistration = () => {

    const id = useInput();
    const name = useInput();
    const inn = useInput();
    const ogrn = useInput();

    return (
        <div className="org-reg-wrapper">
            <Input fieldName={"ID ОБЪЕКТА"} inputHook={id}/>
            <Input fieldName={"НАИМЕНОВАНИЕ"} inputHook={name}/>
            <Input fieldName={"ИНН"} inputHook={inn}/>
            <Input fieldName={"ОГРН"} inputHook={ogrn}/>
            <PrimaryButton text={"Зарегистрировать объект"}/>
        </div>
    );

}

export default OrganizationRegistration;