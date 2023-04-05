import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useForm } from '../../hooks/useForm';


export const Login = () => {

    const {onLoginSubmit} = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        password: '',
    }, onLoginSubmit);
    return (
        <div className="login">
            <div className="login-form-container"  >
                <form className="login-form" action="users/login" method="POST" onSubmit={onSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="login-input" name="username" value={values.username} onChange={changeHandler} />
                    <label htmlFor="password">Password</label>
                    <input type="password" className="login-input" name="password" value={values.password} onChange={changeHandler} />
                    <button id="login-submit" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};