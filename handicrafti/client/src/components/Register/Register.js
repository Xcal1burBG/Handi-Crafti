import './Register.css'
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../Contexts/AuthContext';
import { useErrorContext } from '../../Contexts/ErrorContext';

export const Register = () => {


    const { onRegisterSubmit } = useContext(AuthContext);
    const { errors, minLength, validateUsername, validatePhoneNumber, validateEmail } = useErrorContext();


    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        repass: '',

    }, onRegisterSubmit);


    return (
        <div className="register">
            <div className="register-form-container">
                <form className="register-form" method="POST" action="users/register" onSubmit={onSubmit}>

                    <label htmlFor="username">Username</label>
                    <input type="text"
                        className="register-input"
                        name="username"
                        value={values.username}
                        onChange={changeHandler}
                        onBlur={(e) => validateUsername(e, values.username)}
                    />
                    {errors.username && (
                        <p className="register-error"> Please, enter a valid username!</p>
                    )}

                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className="register-input"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        onBlur={(e) => validateEmail(e, values.email)}
                    />
                    {errors.email && (
                        <p className="register-error">Please, enter a valid Email!</p>
                    )}

                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text"
                        className="register-input"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={changeHandler}
                        onBlur={(e) => validatePhoneNumber(e, values.phoneNumber)}
                    />
                    {errors.phoneNumber && (
                        <p className="register-error">Please, enter a valid Phone number!</p>
                    )}

                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="register-input"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={(e) => minLength(e, 3, values.password)}
                    />
                    {errors.password && (
                        <p className="register-error">
                            Password should be at least 3 characters long!
                        </p>
                    )}

                    <label htmlFor="repass">Repeat password</label>
                    <input type="password"
                        className="register-input"
                        name="repass"
                        value={values.repass}
                        onChange={changeHandler}
                        onBlur={(e) => minLength(e, 3, values.repass)}
                    />
                    {errors.repass && (
                        <p className="register-error">
                            Password should be at least 3 characters long!
                        </p>
                    )}

                    <button id="register-submit" type="submit" >Register</button>
                </form>
            </div>
        </div>
    );
};