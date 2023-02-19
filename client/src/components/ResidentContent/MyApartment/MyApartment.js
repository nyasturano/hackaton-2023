import './myApartment.css';
import ApartmentInfo from './ApartmentInfo/ApartmentInfo';
import ChequeInfo from './ChequeInfo/ChequeInfo';
import PrimaryLightButton from '../../PrimaryLightButton/PrimaryLightButton';
import Light from './light.png';
const MyApartment = () => {
    return (
        <div>
            <ChequeInfo/>
            <ApartmentInfo/>
            <PrimaryLightButton text={"ВАШ УМНЫЙ ДОМ"}/>
            <img src={Light}/>

        </div>  
    );
}

export default MyApartment;