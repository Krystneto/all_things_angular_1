
angular.module("IntroAngular")
    .controller("HomeController", HomeController)

function HomeController () {
    var vm = this;
    vm.test = "Hello World"
    vm.counter = 0
}
