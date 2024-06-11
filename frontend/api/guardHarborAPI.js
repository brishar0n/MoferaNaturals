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