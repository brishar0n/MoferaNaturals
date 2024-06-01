import axios from "axios"
import jwt_decode from "jwt_decode"

export const validateToken = (token) => {
    const now = Math.round(new Date().getTime()/1000);
    const expDate = jwt_decode(token).exp;
    return token && now < expDate;
}

export const setSession = (token) => {
    if (token) {
        localStorage.setItem("token") = token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return;
    }

    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
}