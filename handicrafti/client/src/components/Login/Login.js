import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useErrorContext } from '../../Contexts/ErrorContext';


export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);
    const { errors, minLength, isFormValid, validateUsername } = useErrorContext();
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        password: '',
    }, onLoginSubmit);
    return (
        <div className="login">
            <div className="login-form-container"  >
                <form className="login-form" action="users/login" method="POST" onSubmit={onSubmit}>

                    <label htmlFor="username">Username</label>
                    <input type="text"
                        className="login-input"
                        name="username"
                        value={values.username}
                        onChange={changeHandler}
                        onBlur={(e) => validateUsername(e, values.username)}
                    />
                    {errors.username && (
                        <p className="login-error">Please, enter a valid username!</p>
                    )}


                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="login-input"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={(e) => minLength(e, 5, values.password)}
                    />
                    {errors.password && (
                        <p className="login-error">
                            Password must be at least 5 characters long!
                        </p>
                    )}

                    <button id="login-submit" type="submit">Login</button>

                </form>
            </div>
        </div>
    );
};