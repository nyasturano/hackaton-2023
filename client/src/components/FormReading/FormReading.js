import './formReading.css';

const FormReading = () => {
    return (
        <div className='form-reading'>
            ГОРЯЧАЯ ВОДА
            <input type="text"/>
            ХОЛОДНАЯ ВОДА
            <input type="text"/>
            ЭЛЕКТРИЧЕСТВО
            <input type="text"/>
            <button>ОТПРАВИТЬ ПОКАЗАНИЯ</button>
        </div>
    );
};

export default FormReading;