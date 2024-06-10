<template>
  <div class="text-center">
    <img class="title shadow-lg" src="/src/assets/titile-img2.png" alt="">
  </div>
  <div class="container-register mt-5">
    <div class="row justify-content-center">
      <div class="col-md-3 col-spacing">
        <div class="card card-border shadow-lg mb-4">
          <div class="card-body shadow-lg">
            <form @submit.prevent="saveDelivery">
              <div class="form-group text-center">
                <label for="nomeEntregador1" class="d-block">Nome do Entregador</label>
                <input type="text" class="form-control input-border" id="nomeEntregador1" placeholder="Insira nome do entregador" v-model="entrega.motorista" required>
              </div>
              <div class="form-group text-center">
                <label for="destino1" class="d-block">Destino</label>
                <input type="text" class="form-control input-border" id="destino1" placeholder="Insira o destino" v-model="entrega.destino" required>
              </div>
              <div class="form-group text-center">
                <label for="observacoes1" class="d-block">Observações</label>
                <textarea class="form-control input-border" id="observacoes1" rows="3" placeholder="observações" v-model="entrega.observacao" required></textarea>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-red">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-spacing">
        <div class="card card-border shadow-lg mb-4">
          <div class="card-body shadow-lg">
            <form @submit.prevent="saveVehicle">
              <div class="form-group text-center">
                <label for="veiculo" class="d-block">Veículo</label>
                <input type="text" class="form-control input-border" id="veiculo" placeholder="Insira o veiculo" v-model="veiculo.veiculo" required>
              </div>
              <div class="form-group text-center">
                <label for="capacidade" class="d-block">Capacidade</label>
                <input type="number" class="form-control input-border" id="capacidade" placeholder="Insira a Capacidade" v-model="veiculo.capacidade" required>
              </div>
              <div class="form-group text-center">
                <label for="autonomia" class="d-block">Autonomia</label>
                <input type="number" class="form-control input-border" id="autonomia" placeholder="Insira a autonomia" v-model="veiculo.autonomia" required>
              </div>
              <div class="form-group text-center">
                <button class="btn btn-red">Registrar Veiculo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.col-spacing {
    margin-left: 5%;
    margin-right: 5%;
  }

.btn-red {
      background-color: #ED1C26 !important;
      color: white !important;
      margin-top: 40px; 
    }

 .card-border {
      border: 1px solid red !important;
      border-radius: 10px; 
    }
    .input-border {
      border: 1px solid red !important; 
      border-radius: 5px; 
    }
</style>


<script>
import VehicleDataService from '../services/VehicleDataService';
import DeliverDataService from '../services/DeliverDataService';

export default {
  name: "new-delivery",
  data() {
    return {
      entrega: {
        motorista: "",
        destino: "",
        status: "",
        observacao: ""
      },
      veiculo: {
        veiculo: "",
        autonomia: "",
        capacidade: ""
      }
    };
  },
  methods: {
    saveVehicle() {
      var data = {
        veiculo: this.veiculo.veiculo,
        autonomia: this.veiculo.autonomia,
        capacidade: this.veiculo.capacidade
      };

      VehicleDataService.create(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    saveDelivery() {
      var data = {
        motorista: this.entrega.motorista,
        destino: this.entrega.destino,
        status: "EM ANDAMENTO",
        observacao: this.entrega.observacao
      };

      DeliverDataService.create(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
}
</script>