<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img.png" alt="">
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr class="color-title">
            <th style="background-color: #ed1c26;">Veículo</th>
            <th style="background-color: #ed1c26;">Autonomia</th>
            <th style="background-color: #ed1c26;">Capacidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(veiculo, index) in veiculos" :key="index">
            <td>{{ veiculo.veiculo }}</td>
            <td>{{ veiculo.autonomia }}Km</td>
            <td>{{ veiculo.capacidade }}Kg</td>
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