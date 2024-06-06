import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7258/api",
    headers: {
        "Content-Type": "application/json"
    }
});