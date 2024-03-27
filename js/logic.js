
function LoadDataTable({ table, url, columns, DisplayLength = 50, colOrderby = 0, language = "US", showColumns = ':visible' } = {}) {
    $('#' + table).DataTable({
        "aProcessing": true,
        "aServerSide": true,
        "autoWidth": true,
        "language": {
            "url": SetLanguage(language)
        },
        "ajax": {
            "url": url,
            "dataSrc": ""
        },
        "columns": columns,
        "resonsive": true,
        "bDestroy": true,
        "iDisplayLength": DisplayLength,
        "order": [[colOrderby, "asc"]],
        dom: 'lBfrtip',
        buttons: [
            {
                extend: 'print',
                text: '<i class="fa-solid fa-print pe-1"></i> Print',
                className: ' btn shadow-sm btn-light',
                orientation: 'landscape',
                pageSize: 'LEGAL',
                exportOptions: {
                    modifier: {
                    }
                },
                columns: showColumns
            },
            {
                extend: 'excel',
                text: '<i class="fa-solid fa-file-excel pe-1"></i> Excel',
                className: ' btn shadow-sm btn-light',
                exportOptions: {
                    modifier: {
                    },
                    columns: showColumns
                }
            },
            {
                extend: 'pdf',
                text: '<i class="fa-solid fa-file-pdf pe-1"></i> PDF',
                className: ' btn shadow-sm btn-light',
                orientation: 'landscape',
                pageSize: 'LEGAL',
                exportOptions: {
                    modifier: {
                    },
                    columns: showColumns
                }
            }
        ]
    });
}

function SetLanguage(language = "US") {
    // You can add languages from this url: https://cdn.datatables.net/plug-ins/28e7751dbec/i18n/
    switch (language) {
        case "US":
            return "https://cdn.datatables.net/plug-ins/28e7751dbec/i18n/English.json";
            break;
        case "ES":
            return "https://cdn.datatables.net/plug-ins/28e7751dbec/i18n/Spanish.json";
            break;
        case "ZH":
            return "https://cdn.datatables.net/plug-ins/28e7751dbec/i18n/Chinese-traditional.json";
            break;
        case "FR":
            return "https://cdn.datatables.net/plug-ins/28e7751dbec/i18n/French.json";
            break;
        default:
            return "https://cdn.datatables.net/plug-ins/28e7751dbec/i18n/English.json";
            break;
    }
}