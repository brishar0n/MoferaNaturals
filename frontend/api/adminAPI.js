import { URL } from "./APIconst"
import axios from "axios";


export const getUsers = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Users = await axios.get(URL + "/admin/users")
        .catch((error) => {
            console.error(error);
        });

    return Users
}

export const postCentra = async(Centra) => {
    console.log(Centra)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    try {
        const response = await axios.post(URL + "/admin/new_centra", Centra);
        console.log("Success");
        return response.data; // Return the response data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getShippingInfo = async(ShippingInfo) => {
    console.log(ShippingInfo)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const ShippingInfos = await axios.get(URL + "/admin/shipping")
        .catch((error) => {
            console.error(error);
        });
    return ShippingInfos
}

export const getPackages = async() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Packages = await axios.get(URL + "/admin/packages")
        .catch((error) => {
            console.error(error);
        });

    return Packages
}

export const getCheckpoints = async() => {
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

export const updateUser = async(user) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    console.log(user)
    const userData = {
        "centra_unit": null,
        "username": user.username,
        "email": user.email,
        "password": null,
        "role": user.role,
    }
    console.log(userData)
    await axios.put(URL + `/admin/users/${user.id}`, userData)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteUser = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/users/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteCheckpoint = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/checkpoints/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deletePackage = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/packages/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteShippingInfo = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/shipping/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteDryLeaves = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/dry_leaves/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteFlour = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/flour/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteWetLeaves = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/wet_leaves/${id}`)
        .catch((error) => {
            console.error(error);
        });
}

export const deleteCentra = async(id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    await axios.delete(URL + `/admin/centra/${id}`)
        .catch((error) => {
            console.error(error);
        });
}