
angular.module('gistDemoApp', ['gist'])
    .controller('mainController', MainController);

function MainController() {
    var vm = this;

    vm.gistId = 'e65d546c16acb1a10c3f5e1f673c5223';
}