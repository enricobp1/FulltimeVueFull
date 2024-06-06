<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img3.png" alt="">
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th style="background-color: #ed1c26;">ID</th>
            <th style="background-color: #ed1c26;">Motorista</th>
            <th style="background-color: #ed1c26;">Destino</th>
            <th style="background-color: #ed1c26;">Status</th>
            <th style="background-color: #ed1c26;">Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entrega, index) in entregas" :key="index">
            <td>{{ entrega.id }}</td>
            <td>{{ entrega.motorista }}</td>
            <td>{{ entrega.destino }}</td>
            <td>{{ entrega.status }}</td>
            <td>{{ entrega.observacao }}</td>
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

.thead {
  color: #ED1C26;
  background-color: #ED1C26;
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
import DeliverDataService from "../services/DeliverDataService";


export default {
  name: "list-entregas",
  data() {
    return{
      entregas: []
    };
  },
  methods: {
    retriveDelivery() {
      DeliverDataService.getAll()
      .then(response => {
        this.entregas = response.data;
        console.log(this.entregas);
      })
      .catch(e => {
        console.log(e)
      });
    }
  },
  mounted() {
    this.retriveDelivery();
  },
}
</script>