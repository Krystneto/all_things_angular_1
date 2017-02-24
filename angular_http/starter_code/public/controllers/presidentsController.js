(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

  function PresidentsController($http){
    var vm = this;
    //   {"name": "Blorp Florp McRichards", "start": 1789, "end": 1790 },
    //   {"name": "John MuscleBrain Adams", "start": 1790, "end": 1801 },
    //   {"name": "Blogpost Dorgabn", "start": 1801, "end": 1949 },
    //   {"name": "Mike", "start": 1949, "end": 1947 }
    // ];
    vm.addPresident = addPresident;
    vm.newPresident = {};
    vm.all = []
    getPresidents();
    vm.removePresident = removePresident;
    vm.uncover = uncover;

    function getPresidents () {
      $http
      .get('/api/presidents')
      .then(function( response ) {
        vm.all = response.data.presidents;
      }, function(err) {
          console.log(err)
      })
    }

    function addPresident() {
      $http
      .post('/api/presidents', vm.newPresident)
      .then(function(res) {
        vm.all.push(vm.newPresident);
        vm.newPresident = {};
      }, function(err) {
        console.log(err)
      })
    }

    function removePresident(id) {
      console.log(id)
      $http
      .delete('/api/presidents/' + id)
      .then(function(res) {
        console.log(res)
      }, function(err) {
        console.log(err)
      })
    }

    function uncover(id) {
      console.log(id)
      $http
      .put('/api/presidents/'+ id, {uncovered: true} )
      .then(function(res) {
        console.log(res)
      }, function(err) {
        console.log(err)
      })
    }

  }
})();
