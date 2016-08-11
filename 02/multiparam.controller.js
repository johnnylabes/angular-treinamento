angular.module("myApp", []).controller("myCtrl", 
function ($scope) {
    
    $scope.contatos = new Array();

    $scope.cadastrar = cadastrar; 

    function cadastrar(contato) {
        $scope.contatos.push({
            nome: contato.nome,
            idade: contato.idade,
            telefone: contato.telefone
        });
        console.log($scope.contatos);
    }
});