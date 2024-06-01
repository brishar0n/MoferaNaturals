import axios from 'axios'
import {URL} from "./APIconst"

export const postWetLeaves = (WetLeaves) => {
    WetLeaves = {...WetLeaves, "centra_id" : 1}
    console.log(WetLeaves)
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    axios.post(URL + "/centra/new_wet_leaves", WetLeaves)
    .catch((error) => {
        console.error(error);
    });
    console.log("success")
}

export const postDryLeaves = (DryLeaves) => {
    DryLeaves = {...DryLeaves, "centra_id" : 1}
    console.log(DryLeaves)
    axios.post(URL + "/centra/new_dry_leaves", DryLeaves)
    .catch((error) => {
        console.error(error);
    });
}

export const postFlour = (Flour) => {
    Flour = {...Flour, "centra_id" : 1}
    console.log(Flour)
    axios.post(URL + "/centra/new_Flour", Flour)
    .catch((error) => {
        console.error(error);
    });
}

export const washWetLeaves = (Data) => {
    console.log(Data)
    axios.put(URL + "/centra/wash_wet_leaves/" + Data.id, {"date": Data.date})
    .catch((error) => {
        console.error(error);
    });
}

export const dryWetLeaves = (Data) => {
    console.log(Data)
    axios.put(URL + "/centra/dry_wet_leaves/" + Data.id, {"date": Data.date})
    .catch((error) => {
        console.error(error);
    });
}

export const flourDryLeaves = (Data) => {
    console.log(Data)
    axios.put(URL + "/centra/flour_dry_leaves/" + Data.id, {"date": Data.date})
    .catch((error) => {
        console.error(error);
    });
}