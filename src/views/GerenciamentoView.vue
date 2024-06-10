<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img3.png" alt="">
    </div>

    <div class="container">
      <table class="table table-striped custom-table">
        <thead class="thead-dark">
          <tr>
            <th class="bg-custom">ID</th>
            <th class="bg-custom">Motorista</th>
            <th class="bg-custom">Destino</th>
            <th class="bg-custom">Status</th>
            <th class="bg-custom">Observação</th>
            <th class="bg-custom"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entrega, index) in entregas" :key="index">
            <td>{{ entrega.id }}</td>
            <td>{{ entrega.motorista }}</td>
            <td>{{ entrega.destino }}</td>
            <td>{{ entrega.status }}</td>
            <td>{{ entrega.observacao }}</td>
            <td class="d-flex align-items-center justify-content-between">
              <div v-if="entrega.status === 'EM ANDAMENTO'">
                <button class="btn btn-success btn-sm mx-1" @click="completeDelivery(index)">Concluir Entrega</button>
                <button class="btn btn-danger btn-sm mx-1" @click="cancelDelivery(index)">Cancelar Entrega</button>
              </div>
              <div v-else>
                ‎ 
              </div>
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

.thead-dark th {
  color: white;
  background-color: #ED1C26;
  border-color: #ED1C26;
}

.title {
  height: 50px;
}

.text-center {
  text-align: center;
}

.table {
  margin-top: 20px;
  border-bottom: 2px solid #ED1C26; 
}

.button-container {
  display: flex;
  gap: 10px;
}

.custom-table th, .custom-table td {
  border-color: lightgray !important;
}

.btn-success {
  background-color: #28a745; 
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-danger {
  background-color: #dc3545; 
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
</style>

<script>
import DeliverDataService from "../services/DeliverDataService";

export default {
  name: "list-entregas",
  data() {
    return {
      entregas: []
    };
  },
  methods: {
    retrieveDelivery() {
      DeliverDataService.getAll()
        .then(response => {
          this.entregas = response.data.map(entrega => ({
            ...entrega,
            showButtons: true
          }));
          console.log(this.entregas);
        })
        .catch(e => {
          console.log(e);
        });
    },
    completeDelivery(index) {
      const entrega = this.entregas[index];
      const data = {
        id: entrega.id,
        motorista: entrega.motorista,
        destino: entrega.destino,
        status: "ENTREGUE",
        observacao: entrega.observacao
      };

      DeliverDataService.update(data)
        .then(response => {
          console.log(response.data);
          this.retrieveDelivery();
        })
        .catch(e => {
          console.log(e);
        });
    },
    cancelDelivery(index) {
      const entrega = this.entregas[index];
      const data = {
        id: entrega.id,
        motorista: entrega.motorista,
        destino: entrega.destino,
        status: "CANCELADO",
        observacao: entrega.observacao
      };

      DeliverDataService.update(data)
        .then(response => {
          console.log(response.data);
          this.retrieveDelivery();
        })
        .catch(e => {
          console.log(e);
        });
        
    }
  },
  mounted() {
    this.retrieveDelivery();
  }
}
</script>
