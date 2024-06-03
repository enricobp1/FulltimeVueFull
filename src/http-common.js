import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7022/api",
    headers: {
        "Content-Type": "application/json"
    }
});