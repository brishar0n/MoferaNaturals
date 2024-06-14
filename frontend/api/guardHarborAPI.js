import { URL } from "./APIconst";
import axios from "axios";

export const postCheckpoint = (Checkpoint) => {
    console.log(Checkpoint)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    axios.post(URL + "/guard_harbor/add_checkpoint", Checkpoint)
    .catch((error) => {
        console.error(error);
    });
}

export const getShippingInfo = (ShippingInfo) => {
    console.log(ShippingInfo)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    axios.get(URL + "/guard_harbor/shipping")
    .catch((error) => {
        console.error(error);
    });
    console.log("success")
}

export const getPackages = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Packages = await axios.get(URL + "/guard_harbor/packages")
    .catch((error) => {
        console.error(error);
    });

    return Packages
}
