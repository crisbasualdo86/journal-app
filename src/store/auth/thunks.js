import {
    loginWithEmailPassword,
    logOutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle,
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal';
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

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    };
};

export const startLogout = () => {
    return async (dispatch) => {
        await logOutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());
    };
};
