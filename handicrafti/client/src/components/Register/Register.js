import './Register.css'

export const Register = () => {
    return (
        <div className="register">
            <div className="register-form-container">
                <form className="register-form" action="#" method="post">

                    <label for="username">Username</label>
                    <input type="text" className="register-input" name="username" />

                    <label for="username">email</label>
                    <input type="text" className="register-input" name="email" />

                    <label for="password">Password:</label>
                    <input type="password" className="register-input" name="password" />

                    <label for="repass">Repeat password:</label>
                    <input type="password" className="register-input" name="password" />

                    <button id="register-submit" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};