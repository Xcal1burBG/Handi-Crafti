import './Register.css'

export const Register = () => {
    return (
        <div className="register">
            <div className="register-form-container">
                <form className="register-form" action="#" method="post">

                    <label for="username">Username</label>
                    <input type="text" className="register-input" name="username" />

                    <label for="email">Email</label>
                    <input type="text" className="register-input" name="email" />

                    <label for="phoneNumber">PhoneNumber</label>
                    <input type="text" className="register-input" name="phoneNumber" />

                    <label for="password">Password:</label>
                    <input type="password" className="register-input" name="password" />

                    <label for="repass">Repeat password:</label>
                    <input type="password" className="register-input" name="repass" />

                    <button id="register-submit" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};