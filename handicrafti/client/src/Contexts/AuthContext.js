import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from '../services/authService';


export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.token);

    const onLoginSubmit = async (values) => {
        try {
            const result = await authService.login(values);
            
            setAuth(result);
            navigate('/offers/catalog');
        } catch (error) {
            console.log('problem');
        }

    };

    const onRegisterSubmit = async (values) => {

        if (values.password !== values.repass) {
            return;
        }

        try {
            const result = await authService.register(values);
            await authService.login({username: values.username, password: values.password});

            setAuth(result);

            navigate('/offers/catalog');
        } catch (error) {
            console.log('There is problem in AuthContext on register');
        }
    };


    const onLogout = async () => {
        // await authService.logout();
        setAuth({});
        navigate('/offers/catalog');
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.token,
        userEmail: auth.email,
        isAuthenticated: !!auth.token

    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </ AuthContext.Provider>
        </>
    )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};