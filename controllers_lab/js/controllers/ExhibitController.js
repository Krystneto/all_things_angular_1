
angular.module("Museum")
  .controller("ExhibitController", ExhibitController);

function ExhibitController() {
  var vm = this;
  vm.image = 'http://4.bp.blogspot.com/--e_BDE_jjKQ/VdtAbTHozTI/AAAAAAAAHsI/bGdPlHsDlZQ/s1600/Sargent_DIGITAL_Hero.jpg';
  vm.title = 'The Metropolitan Museum of Art';
  vm.author = 'John Sargent',
  vm.caption = 'Sargent Portraits of Artists & Friends'
}
