import { authConstants } from '../constants';
import { authService } from '../services';
// import { alertActions } from './';
import { history } from '../helpers';

const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        authService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
    authService.logout();
    history.push('/login');
    return { type: authConstants.LOGOUT };
}

export const authActions = {
    login,
    logout
};