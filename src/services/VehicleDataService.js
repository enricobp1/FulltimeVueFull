import http from "../http-common";

class VehicleDataService {
    getAll() {
        return http.get("/Veiculos");
    }

    create(data) {
        return http.post("/Veiculos", data)
    }

    delete(id) {
        return http.delete(`/Veiculos/${id}`);
      }
    }

export default new  VehicleDataService();