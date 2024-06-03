<script setup>

</script>



<template>
    <div class="text-center ">
        <img class="title shadow-lg " src="/src/assets/titile-img2.png" alt="">
    </div>
    <div class="container-register mt-5">
  <div class="row justify-content-center">
    <div class="col-md-3 col-spacing">
      <div class="card card-border shadow-lg mb-4">
        <div class="card-body shadow-lg">
          <form>
            <div class="form-group text-center">
              <label for="nomeEntregador1" class="d-block">Nome do Entregador</label>
              <input type="text" class="form-control input-border" id="nomeEntregador1" placeholder="Insira nome do entregador">
            </div>
            <div class="form-group text-center">
              <label for="destino1" class="d-block">Destino</label>
              <input type="text" class="form-control input-border" id="destino1" placeholder="Insira o destino">
            </div>
            <div class="form-group text-center">
              <label for="idEntrega1" class="d-block">Status</label>
              <input type="text" class="form-control input-border" id="idEntrega1" placeholder="Insira o status">
            </div>
            <div class="form-group text-center">
              <label for="observacoes1" class="d-block">Observações</label>
              <textarea class="form-control input-border" id="observacoes1" rows="3" placeholder="observações"></textarea>
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
          <form>
            <div class="form-group text-center">
              <label for="nomeEntregador2" class="d-block">Veículo</label>
              <input type="text" class="form-control input-border" id="nomeEntregador2" placeholder="Insira o veiculo">
            </div>
            <div class="form-group text-center">
              <label for="destino2" class="d-block">Capacidade</label>
              <input type="text" class="form-control input-border" id="destino2" placeholder="Insira a Capacidade">
            </div>
            <div class="form-group text-center">
              <label for="idEntrega2" class="d-block">Autonomia</label>
              <input type="text" class="form-control input-border" id="idEntrega2" placeholder="Insira a autonomia">
            </div>
            
            <div class="form-group text-center">
              <button type="submit" class="btn btn-red">Registrar</button>
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