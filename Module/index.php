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

  <article>
    <?php 
      @include 'inc/home.php';
    ?>
  </article>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script type="module" src="assets/js/module.js"></script>

</body>
</html>
