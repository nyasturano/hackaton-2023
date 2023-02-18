import './apartmentInfo.css';

const ApartmentInfo = () => {
    return (
        <div className='apartment-info'>
            <div>АДРЕС:</div>
            <div>АРЕНДНАЯ ПЛАТА:</div>
            <div>КОЛИЧЕСТВО ЗАРАГИСТРИРОВАННЫХ ЖИЛЬЦОВ:</div>
            <div className='another-info'> 
                Дополнительная иноформация
            </div>
        </div>
    );
}

export default ApartmentInfo;