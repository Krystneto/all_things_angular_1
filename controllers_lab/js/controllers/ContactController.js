
angular.module("Museum")
  .controller("ContactController", ContactController)

function ContactController () {
  var vm = this;
  vm.contact = 'Contact:';
  vm.email = 'development@metmuseum.org';
  vm.phone = '212-650-2425';
  vm.donations = [
    {donation: '$50'},
    {donation: '$100'},
    {donation: '$250'},
    {donation: '$500'},
    {donation: '$1000'},
    {donation: '$5000'}
  ]

}
