import { URL } from "./APIconst"
import axios from "axios";


export const getUsers = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Users = await axios.get(URL + "/admin/users")
        .catch((error) => {
            console.error(error);
        });

    return Users
}

export const getShippingInfo = async (ShippingInfo) => {
    console.log(ShippingInfo)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const ShippingInfos = await axios.get(URL + "/admin/shipping")
        .catch((error) => {
            console.error(error);
        });
    return ShippingInfos
}   

export const getPackages = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Packages = await axios.get(URL + "/admin/packages")
    .catch((error) => {
        console.error(error);
    });

    return Packages
}

export const getCheckpoints = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Checkpoints = await axios.get(URL + "/admin/checkpoints")
    .catch((error) => {
        console.error(error);
    });

    return Checkpoints
}

export const getDryLeaves = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const DryLeaves = await axios.get(URL + "/admin/dry_leaves")
        .catch((error) => {
            console.error(error);
        });

    return DryLeaves
}

export const getFlour = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Flour = await axios.get(URL + "/admin/flour")
        .catch((error) => {
            console.error(error);
        });

    return Flour
}

export const getWetLeaves = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const WetLeaves = await axios.get(URL + "/admin/wet_leaves")
        .catch((error) => {
            console.error(error);
        });

    return WetLeaves
}

export const getCentra = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Centra = await axios.get(URL + "/admin/centra")
        .catch((error) => {
            console.error(error);
        });

    return Centra
}