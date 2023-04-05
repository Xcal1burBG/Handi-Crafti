import './Register.css'
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../Contexts/AuthContext';

export const Register = () => {
    

    const { onRegisterSubmit } = useContext(AuthContext);
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
                <form className="register-form" method="POST" action = "users/register" onSubmit={onSubmit}>

                    <label htmlFor="username">Username</label>
                    <input type="text" className="register-input" name="username" value={values.username} onChange={changeHandler} />

                    <label htmlFor="email">Email</label>
                    <input type="text" className="register-input" name="email" value={values.email} onChange={changeHandler} />

                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" className="register-input" name="phoneNumber" value={values.phoneNumber} onChange={changeHandler}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" className="register-input" name="password" value={values.password} onChange={changeHandler} />

                    <label htmlFor="repass">Repeat password</label>
                    <input type="password" className="register-input" name="repass" value={values.repass} onChange={changeHandler}/>

                    <button id="register-submit" type="submit" >Register</button>
                </form>
            </div>
        </div>
    );
};