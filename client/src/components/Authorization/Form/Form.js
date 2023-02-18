import './form.css';
const Form = () => {
    return (
        <div className='form'>
            <p>ЛОГИН</p>
            <input type="email"/>
        
            <p>ПАРОЛЬ</p>
            <input type="password"/>
            <button>Войти</button>
        </div>
    );
    
};

export default Form;