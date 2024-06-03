<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img3.png" alt="">
    </div>

    <div class="container">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Motorista</th>
            <th>Destino</th>
            <th>Status</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#RI98</td>
            <td>ROBERTO</td>
            <td>SÃO PAULO</td>
            <td>ENTREGUE</td>
            <td>1 HORA DE ATRASO</td>
          </tr>
          <tr class="bg-secondary">
            <td>#RI42</td>
            <td>FELIPE</td>
            <td>MARÍLIA</td>
            <td>ENTREGUE</td>
            <td>PRAZO CUMPRIDO</td>
          </tr>
          <tr>
            <td>#RI17</td>
            <td>NICHOLAS</td>
            <td>RIO PRETO</td>
            <td>EM TRÂNSITO</td>
            <td>1 DIA DE ATRASO</td>
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