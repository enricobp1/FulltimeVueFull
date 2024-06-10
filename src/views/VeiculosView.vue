<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img.png" alt="">
    </div>

    <div class="container">
      <table class="table table-striped custom-table">
        <thead class="thead-dark">
          <tr class="color-title">
            <th class="bg-custom">Veículo</th>
            <th class="bg-custom">Autonomia</th>
            <th class="bg-custom">Capacidade</th>
            <th class="bg-custom"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(veiculo, index) in veiculos" :key="index">
            <td>{{ veiculo.veiculo }}</td>
            <td>{{ veiculo.autonomia }}Km</td>
            <td>{{ veiculo.capacidade }}Kg</td>
            <td class="text-right">
              <button class="btn btn-danger btn-sm mx-1" @click="removerVeiculo(index, veiculo.id)">Remover Veículo</button>
            </td>
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

.custom-table th {
  border-color: #ED1C26 !important;
}

.color-title th {
  color: white;
}

.bg-custom {
  background-color: #ed1c26;
}

.bg-custom:hover {
  background-color: #c82333;
}

.custom-table th, .custom-table td {
  border-color: transparent !important;
}

.custom-table tbody tr:last-child td {
  border-bottom: 2px solid #ED1C26;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
</style>

<script>
import VehicleDataService from "../services/VehicleDataService";

export default {
  name: "list-veiculos",
  data() {
    return {
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
          console.log(e);
        });
    },
    removerVeiculo(index, id) {
    VehicleDataService.delete(id)
      .then(response => {
        console.log(response.data);
        this.retriveVehicle();
      })
      .catch(e => {
        console.log(e);
      });
  }

  },
  mounted() {
    this.retriveVehicle();
  }
}
</script>
