<template>
    
</template>

<script>
import VehicleDataService from "../services/VehicleDataService";
import { veiculos } from 'jquery';

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