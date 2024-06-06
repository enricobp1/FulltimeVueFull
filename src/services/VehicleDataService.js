import http from "../http-common";

class VehicleDataService {
    getAll() {
        return http.get("/Veiculos");
    }

    create(data) {
        return http.post("/Veiculos", data)
    }
}

export default new  VehicleDataService();