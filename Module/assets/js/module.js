import { paramTable, datatable } from "./datatable.js";

const Options = {
    salvar: () => {
        $(".card-body").html('roni')
    },
    listar: async () => {

        // Parâmetros DataTable
        paramTable.titleTable = 'Filmes';
        paramTable.idTable = 'movie'; // Sempre no singular e concatena com o id da tabela.
        paramTable.columnsTable = [
                { data: "title",          title: "Título", orderData: [0, 1] },
                { data: "release_date",   title: "Lançamento" },
                { data: "vote_average",   title: "Classificação" },
                { data: "popularity",     title: "Popularidade" },
                { data: "overview",       title: "Descrição", searchable: false },
                { data: null,             title: "Imagens", render: (data) =>{
                    return `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}" height="150px"/>
                    <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" height="150px"/>`;
                } }
            ];
        paramTable.urlRequisicaoTable = 'https://api.themoviedb.org/3/movie/popular?api_key=9b1ecee39354d652ee58d5c916a94e8d&language=pt-BR&page=1';

        datatable(paramTable); // Inicializa o datatable
    }
}

$(document).ready(() => {
    // Se for página listar, vai carregar o datatable
    const pagePartValue = $("#pageParts").val();
    if (pagePartValue === "listar") {
        Options.listar();
    } else if (pagePartValue === "salvar") {
        Options.salvar();
    }
});
