<!DOCTYPE html> 
<html lang="pt" data-bs-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="assets/img/icon.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/css/style.css" rel="stylesheet">
  
  <title>Teste Module</title>
  
  <?php
    $pageParts = [];
    $pageParts[0] = "listar";
    $pageParts[1] = "salvar";
  ?>

</head>
<body>

  <div class="container">    
    <div class="card mt-3 mb-3">
      <h5 class="card-header"><?= $pageParts[0] ?></h5>
      <div class="card-body">
        <form id="consultaForm">
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="consultaInput" placeholder="Busque seu filme aqui" aria-label="Busque seu filme aqui" aria-describedby="atualizarTabela">
            <button class="btn btn-outline-secondary" type="submit">Buscar</button>
          </div>
        </form>
        <table id="dt-movie"
          class="table table-striped table-bordered dt-responsive nowrap"
          style="border-collapse: collapse; border-spacing: 0; width: 100%;">
        </table>
      </div>
    </div>
  </div>

<input type="hidden" id="pageParts" value="<?= $pageParts[0] ?>" />

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script type="module" src="assets/js/module.js"></script>

</body>
</html>
