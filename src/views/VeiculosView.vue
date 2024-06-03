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
          <tr>
            <td>CARRO</td>
            <td>100Km</td>
            <td>80kg</td>
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