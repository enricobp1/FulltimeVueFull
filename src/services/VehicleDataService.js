import http from "../http-common";

class VehicleDataService {
    getAll() {
        return http.get("/Veiculos");
    }

    create(data) {
        return http.post("/Veiculos")
    }
}

export default new  VehicleDataService();