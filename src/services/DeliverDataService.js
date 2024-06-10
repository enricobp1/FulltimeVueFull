import http from "../http-common";

class DeliverDataService {
    getAll() {
        return http.get("/Entrega");
    }

    create(data) {
        return http.post("/Entrega", data)
    }

    update(data) {
        return http.put("/Entrega", data)
    }
}

export default new  DeliverDataService();