import './auth.css';
import Input from '../../components/Input/Input';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { useHttp } from '../../hooks/http.hook';
import { useInput } from '../../hooks/useInput';
import { redirect } from 'react-router-dom';

const Auth = () => {
    const login = useInput();
    const password = useInput();

    const {request} = useHttp();

    const auth = () => {
        request('http://localhost:5000/api/user/login', 'POST', 
            JSON.stringify({login: login.value, password: password.value})
            ).then((token) => {
            localStorage.setItem('token', token);
            console.log(token);
            redirect('/dashboard');
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <div className="auth"> 
            <div className="auth-title">ВХОД В СИСТЕМУ</div>
            <div className="auth-wrapper">
                <div className="form">
                    <Input fieldName="ЛОГИН" inputHook={login}/>
                    <Input fieldName="ПАРОЛЬ" fieldType="password" inputHook={password}/>
                    <PrimaryButton click={auth} text="Войти"/>
                </div>
            </div>
        </div>
    );
};

export default Auth;