import { URL } from "./APIconst";
import axios from "axios";

export const getArrivedPackage = async (page) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const Packages = await axios.get(URL + "/xyz/get_package", {
        "params": {"p":page}
    })
    .catch((error) => {
        console.error(error);
    });

    return Packages
}

export const getWetBarChart = async (data) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const WetDatas = await axios.get(URL + "/xyz/quick_get_wet_stats", {
        "params": {...data}
    })
    .catch((error) => {
        console.error(error);
    });

    return WetDatas
}

export const getDryBarChart = async (data) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const DryDatas = await axios.get(URL + "/xyz/quick_get_dry_stats", {
        "params": {...data}
    })
    .catch((error) => {
        console.error(error);
    });

    return DryDatas
}

export const getFlourBarChart = async (data) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    const FlourDatas = await axios.get(URL + "/xyz/quick_get_flour_stats", {
        "params": {...data}
    })
    .catch((error) => {
        console.error(error);
    });

    return FlourDatas
}