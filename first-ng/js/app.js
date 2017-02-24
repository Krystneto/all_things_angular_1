(function() {
'use strict';

// all code will go in here...
angular.module('myApp', [])
  .controller('MainController', function() {
  var vm = this;
  vm.crazyColor = 'skyblue'
  vm.greeting = 'AngularJS, this Superheroic MVW Framework'
  vm.names = ['Barry', 'Wally', 'Bart'];
  vm.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];
  vm.showNames = true;
  vm.addName = function() {
    if (vm.extraNames.length) vm.names.push(vm.extraNames.shift());
  };

  vm.gem = {
    name: 'dress socks',
    price: '$15.00',
    description: 'argyle',
    canPurchase: true,
    soldOut: false
  }

    vm.gemsOfImagination = [
      {
        name: 'stuff',
        price: 'cheap',
        description: 'boring',
        canPurchase: true
      },
      {
        name: 'crap',
        price: 'affordable',
        description: 'neat',
        canPurchase: true
      },
      {
        name: 'ish',
        price: 'pricless',
        description: 'nope',
        canPurchase: false
      }
    ]

    });
  }
})();
