import {
    loginWithEmailPassword,
    registerUserWithEmailPassword,
    signInWithGoogle,
} from '../../firebase/providers';
import { checkingCredentialls, login, logout } from './';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentialls());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentialls());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    };
};

export const startCreatingUserWithEmailPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentialls());

        const { ok, uid, photoURL, errorMessage } =
            await registerUserWithEmailPassword({
                email,
                password,
                displayName,
            });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentialls());

        const result = await loginWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout({ errorMessage }));

        dispatch(login(result));
    };
};
