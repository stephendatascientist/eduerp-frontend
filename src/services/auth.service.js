import { authHeader } from '../helpers'

const apiUrl = 'http://localhost:8000'

const login = (username, password) => {

    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", "GymQi95Jv3auhvPhOOHrpeN9BXBgRoUlaQEA0r7Z");
    urlencoded.append("client_secret", "jtSNNbU8TwL4bPWw2x3yszLUZdTQ5LN7kCxCceS43P6IHCoOrgD8ymr6mGTpMkngf89yEn6Vx6beLs3RvppU0wfCUMZJVrRP30pBp1DAzefTuZvOr2z0Vt64W3tON61r");
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", "admin");
    urlencoded.append("password", "admin");
    urlencoded.append("scope", "read write");

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlencoded
    };

    console.log(requestOptions);

    return fetch(`${apiUrl}/o/token/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const authService = {
    login,
    logout
};