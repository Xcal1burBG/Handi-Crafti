import './Login.css'


export const Login = () => {
    return (
        <div className="login">
            <div className="login-form-container">
                <form className="login-form" action="#" method="post">
                    <label for="username">Username</label>
                    <input type="text" className="login-input" name="username" />
                    <label for="password">Password</label>
                    <input type="password" className="login-input" name="password" />
                    <button id="login-submit" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};