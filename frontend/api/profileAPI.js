import { URL } from "./APIconst";
import axios from "axios";

export const putProfile = (NewProfile) => {
    console.log(NewProfile)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    axios.put(URL + "/profile/edit", NewProfile)
        .catch((error) => {
            console.error(error);
        });
}

export const getCurrentUser = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const User = await axios.get(URL + "/profile/me")
        .catch((error) => {
            console.error(error);
        });
    return User
}