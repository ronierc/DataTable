import { loadStylesAndScripts } from "../Utils/loader.js";
import { SweetAlert } from "../Utils/sweetalert.js";

export var paramTable = {
    titleTable: '',
    idTable: '',
    columnsTable: [],
    urlRequisicaoTable: ''
};

export async function datatable (paramTable) {

    await loadStylesAndScripts([
        "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css",
        "https://cdn.datatables.net/2.0.8/css/dataTables.bootstrap5.css",
        "https://cdn.datatables.net/responsive/3.0.2/css/responsive.bootstrap5.css"
    ], [
        "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js",
        "https://cdn.datatables.net/2.0.8/js/dataTables.js",
        "https://cdn.datatables.net/2.0.8/js/dataTables.bootstrap5.js",
        "https://cdn.datatables.net/responsive/3.0.2/js/dataTables.responsive.js",
        "https://cdn.datatables.net/responsive/3.0.2/js/responsive.bootstrap5.js",
        "https://cdn.datatables.net/plug-ins/1.11.5/sorting/date-eu.js"
    ]);

    for (const key in paramTable) {
        if (paramTable.hasOwnProperty(key) && !paramTable[key]) {
            SweetAlert('Parametros da DataTable!', `Parametro ${key} não definido`, 'error');
            return false; // Retorna false se algum parâmetro estiver vazio
        }
    }

    var consulta = ''; // Inicializa a variável de consulta
    var columnBtnEdit = {
        data: null,
        title: "Ações",
        orderable: false, searchable: false, width: '40px',
        responsivePriority: 5, 
        render: (data, type, full, meta) => {
            return `<span class="action"> 
                    <a class="edit" href="${paramTable.idTable}/alterar/${full.seo_url}" title="Visualizar/Editar">Edit</a>
                </span>`;
        }
    };
    paramTable.columnsTable.push(columnBtnEdit);

    var table = $(`#dt-${paramTable.idTable}`).DataTable({
        ajax: function(data, callback, settings) {
            $.ajax({
                url: paramTable.urlRequisicaoTable,
                dataType: 'json',
                success: function(response) {
                    // Verifica se a propriedade 'results' existe na resposta
                    if (response.results) {
                        // Filtra os dados para incluir apenas aqueles com o título 'mente'
                        var filteredData = response.results.filter(function(item) {
                            return item.title.toLowerCase().includes(consulta);
                        });
                        // Passa os dados filtrados para o callback
                        callback({ data: filteredData });
                    } else {
                        console.error("A resposta do servidor não encontrada.");
                    }
                },
                error: function(xhr, status, error) {
                    console.error("Erro ao buscar dados:", error);
                }
            });
        },
        language: {
            info: `_PAGE_ até _PAGES_ de _MAX_ ${paramTable.titleTable.toLowerCase()}`
        },
		columns: paramTable.columnsTable,
        responsive: {
            details: { // Criar modela para quando responsivo.
                display: DataTable.Responsive.display.modal({
                    header: (row) => {
                        var data = row.data();
                        var firstColumnKey = table.settings().init().columns[0].data; // Acessando dinamicamente a primeira coluna configurada
                        return 'Detalhes de ' + data[firstColumnKey];
                    }
                }),
                renderer: DataTable.Responsive.renderer.tableAll()
            }
        }
    });

     // Evento para atualizar a tabela com base no novo valor de consulta
    $('#consultaForm').on('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário de forma tradicional
        consulta = $('#consultaInput').val().trim(); // Obtém o valor do campo de entrada e remove espaços em branco extras
        table.ajax.reload(); // Recarrega os dados da tabela com base no novo valor da consulta
    });
    
}