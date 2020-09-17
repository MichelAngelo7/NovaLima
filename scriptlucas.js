todasAlertas();
var servidor1 = "http://zisc-env.j8phxubfpq.us-east-2.elasticbeanstalk.com";
var servidor2 = "http://192.168.43.202:8080/ZiscWS";
try {
var User = JSON.parse(Cookies.get('User'));
document.getElementById('linha').innerHTML = "<div class='sessao' >" +
        "<ul class='nav nav-tabs'>" +
        "<li class='active' >" + 
        "<a data-toggle='tab' href='#cadastro' onclick='todasAlertas()'>Cadastro</a>" +
        "</li>" +
        "<li>" +
        "<a data-toggle='tab' href='#alertas' onclick='minhaAlerta(" + User.id + ")' >Histórico de Alertas</a>" +
        "</li>" +
        "<li>" +
        "<a data-toggle='tab' href='#Sair'onclick='telaLogin()'  >Sair</a>" +
        "</li>" +
        "<div class='barra'>" +
        "<a href='../paginas/dashboard.html'>DashBoard</a>" +
        "</div>" +
        "</ul>" +
        "<div class='tab-content'>" +
        "<div id='cadastro' class='tab-pane fade in active'>" +
        "<h3><center>Meu Cadastro</center></h3>" +
        "<img id='logo' width='160' height='160' src='../assets/imagens/user.png' align='center'/>" +
        "</br>" +
        "<p><label id='nome'> &nbsp; Nome: </label>" + " " + User.nome +
        "</p>" +
        "<p><label id='telefone'> &nbsp; Telefone: </label>" + " " + User.celular +
        "</p>" +
        "<p><label id='email'> &nbsp; E-mail: </label>" + " " + User.email +
        "</p>" +
        "<p><label id='cpf'> &nbsp; CPF: </label>" + " " + User.cpf +
        "</p>" +
        "</div>" +
        "<div id='alertas' class='tab-pane fade'>" +
        "<h3><center>Histórico de Alertas</center></h3>" +
        "<div class='row' id='ligaçao' style='overflow: auto'> " +
        " <table id='tabela-minhasA' class='table table-responsive-sm table-hover'>" +
        " <thead> " +
        " <tr> " +
        " <th>Data/Hora</th> " +
        " <th>Tipo</th> " +
        " <th>Observação</th> " +
        " </tr> " +
        " <tbody> " +
        " </tbody> " +
        " </thead> " +
        " </table> " +
        " </div> " +
        "</div>" +
        "</div>" +
        "</div>";
function telaLogin() {
document.getElementById('linha').innerHTML =
        "<meta http-equiv='refresh' content='5; url=../index.html'>";
Cookies.remove('User');
}
function minhaAlerta(id) {
$(document).ready(function () {
tabela();
//console.log(ligacoes);
});
}
function tabela() {
var url = "http://zisc-env.j8phxubfpq.us-east-2.elasticbeanstalk.com/res/consultaalerta/";
var linhas = "";
var minhaAlerta;
var mAlerta = [];
$.get(url, function (data) {
minhaAlerta = data;
if ($('#tabela-minhasA tbody') === 0) {
$('#tabela-minhasA').append("<tbody></tbody>");
}
var i = 0;
minhaAlerta.forEach(function (alerta, index) {
if (User.id === alerta.usuario.id) {
linhas += '<tr data-id="' + index + '">' +
        '<td>' + alerta.logHora + '</td>' +
        '<td>' + alerta.tipo + '</td>' +
        '<td>' + alerta.observacao + '</td>' +
        '</tr>';
mAlerta[i] = alerta;
i++;
}
});
$('#tabela-minhasA tbody').append(linhas);
}, 'json');
$('#tabela-minhasA').on('click', 'tr', function () {
var linha = $(this).data('id');
console.log(linha);
console.log(mAlerta[linha].observacao);
console.log(mAlerta[linha].usuario.id);
carregarMinhaAlerta(mAlerta[linha]);
});
}
;
    var User = JSON.parse(Cookies.get('User'));
    document.getElementById('linha').innerHTML = "<div class='sessao' >" +
            "<ul class='nav nav-tabs'>" +
            "<li class='active' >" +
            "<a data-toggle='tab' href='#cadastro' onclick='todasAlertas()'>Cadastro</a>" +
            "</li>" +
            "<li>" +
            "<a data-toggle='tab' href='#alertas' onclick='minhaAlerta(" + User.id + ")' >Histórico de Alertas</a>" +
            "</li>" +
            "<li>" +
            "<a data-toggle='tab' href='#Sair'onclick='telaLogin()'  >Sair</a>" +
            "</li>" +
            "<div class='barra'>" +
            "<a href='../paginas/dashboard.html'>DashBoard</a>" +
            "</div>" +
            "</ul>" +
            "<div class='tab-content'>" +
            "<div id='cadastro' class='tab-pane fade in active'>" +
            "<h3><center>Meu Cadastro</center></h3>" +
            "<img id='logo' width='160' height='160' src='../assets/imagens/user.png' align='center'/>" +
            "</br>" +
            "<p><label id='nome'> &nbsp; Nome: </label>" + " " + User.nome +
            "</p>" +
            "<p><label id='telefone'> &nbsp; Telefone: </label>" + " " + User.celular +
            "</p>" +
            "<p><label id='email'> &nbsp; E-mail: </label>" + " " + User.email +
            "</p>" +
            "<p><label id='cpf'> &nbsp; CPF: </label>" + " " + User.cpf +
            "</p>" +
            "</div>" +
            "<div id='alertas' class='tab-pane fade'>" +
            "<h3><center>Histórico de Alertas</center></h3>" +
            "<div class='row' id='ligaçao' style='overflow: auto'> " +
            " <table id='tabela-minhasA' class='table table-responsive-sm table-hover'>" +
            " <thead> " +
            " <tr> " +
            " <th>Data/Hora</th> " +
            " <th>Tipo</th> " +
            " <th>Observação</th> " +
            " </tr> " +
            " <tbody> " +
            " </tbody> " +
            " </thead> " +
            " </table> " +
            " </div> " +
            "</div>" +
            "</div>" +
            "</div>";
    function telaLogin() {
        document.getElementById('linha').innerHTML =
                "<meta http-equiv='refresh' content='5; url=../index.html'>";
        Cookies.remove('User');
    }
    function minhaAlerta(id) {
        $(document).ready(function () {
            tabela();
            //console.log(ligacoes);
        });
    }
    function tabela() {
        var url = servidor1 + "/res/consultaalerta/";
        var linhas = "";
        var minhaAlerta;
        var mAlerta = [];
        $.get(url, function (data) {
            minhaAlerta = data;
            if ($('#tabela-minhasA tbody') === 0) {
                $('#tabela-minhasA').append("<tbody></tbody>");
            }
            var i = 0;
            minhaAlerta.forEach(function (alerta, index) {
                if (User.id === alerta.usuario.id) {
                    linhas += '<tr data-id="' + i + '">' +
                            '<td>' + alerta.logHora + '</td>' +
                            '<td>' + alerta.tipo + '</td>' +
                            '<td>' + alerta.observacao + '</td>' +
                            '</tr>';
                    console.log(alerta);
                    mAlerta[i] = alerta;
                    i++;
                }
            });
            i = 0;
            $('#tabela-minhasA tbody').append(linhas);
        }, 'json');
        $('#tabela-minhasA').on('click', 'tr', function () {
            var linha = $(this).data('id');
            console.log(linha);
            console.log(mAlerta);
            console.log(mAlerta[linha].observacao);
            console.log(mAlerta[linha].usuario.id);
            carregarMinhaAlerta(mAlerta[linha]);
        });
    }
    ;
} catch (err) {

alert("É necessário estar logado, para acessar essa página!");
document.getElementById('linha').innerHTML =
        "<meta http-equiv='refresh' content='5; url=../index.html'>";
    alert("É necessário estar logado, para acessar essa página!");
    document.getElementById('linha').innerHTML =
            "<meta http-equiv='refresh' content='5; url=../index.html'>";
}