
angular.module("IntroAngular")
  .controller("CarController", CarController)

function CarController () {
  var vm = this;
  vm.greeting = "Goodbye World"
}
