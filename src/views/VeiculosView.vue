<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img.png" alt="">
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Veículo</th>
            <th>Autonomia</th>
            <th>Capacidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(veiculo, index) in veiculos" :key="index">
            <td>{{ veiculo.veiculo }}</td>
            <td>{{ veiculo.autonomia }}</td>
            <td>{{ veiculo.capacidade }}</td>
          </tr>
          <tr class="bg-secondary">
            <td>CARRO</td>
            <td>140Km</td>
            <td>40Kg</td>
          </tr>
          <tr>
            <td>CARRO</td>
            <td>134Km</td>
            <td>30Kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #ED1C26;
  margin-top: 7%;
  border-radius: 15px;
}

.title {
  height: 50px;
}

.text-center {
  text-align: center;
}

.table {
  margin-top: 20px;
}

.bg-secondary {
  background-color: rgb(177, 174, 174);
}
</style>

<script>
import VehicleDataService from "../services/VehicleDataService";
export default {
  name: "list-veiculos",
  data() {
    return{
      veiculos: []
    };
  },
  methods: {
    retriveVehicle() {
      VehicleDataService.getAll()
      .then(response => {
        this.veiculos = response.data;
        console.log(this.veiculos);
      })
      .catch(e => {
        console.log(e)
      });
    }
  },
  mounted() {
    this.retriveVehicle();
  },
}
</script>