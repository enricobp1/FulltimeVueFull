import http from "../http-common";

class DeliverDataService {
    getAll() {
        return http.get("/Entrega");
    }

    create(data) {
        return http.post("/Entrega", data)
    }
}

export default new  DeliverDataService();