<div class="container">    
  <div class="card mt-3 mb-3">
    <h5 class="card-header"><i class="bi bi-list"></i> <?= $pageParts[0] ?> </h5>
    <div class="card-body">
      <form id="consultaForm">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="consultaInput" placeholder="Busque seu filme aqui" aria-label="Busque seu filme aqui" aria-describedby="atualizarTabela">
          <button class="btn btn-outline-secondary" type="submit">Buscar</button>
        </div>
      </form>
      <table id="dt-movie"
        class="table table-striped table-hover table-bordered dt-responsive nowrap"
        style="border-collapse: collapse; border-spacing: 0; width: 100%;">
      </table>
    </div>
  </div>
</div>

<input type="hidden" id="pageParts" value="<?= $pageParts[0] ?>" />