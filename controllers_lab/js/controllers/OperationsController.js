
angular.module("Museum")
  .controller("OperationsController", OperationsController)


function OperationsController () {
  var vm = this;
  vm.schedule = [
    {'day': 'Monday', 'time':'10:00am-5:30pm'},
    {'day': 'Tuesday', 'time': '10:00am-5:30pm'},
    {'day': 'Wednesday', 'time': '10:00am-5:30pm'},
    {'day': 'Thursday', 'time': '10:00am-5:30pm'},
    {'day': 'Friday', 'time': '10:00am-9:00pm'},
    {'day': 'Saturday', 'time': '10:00am-5:30pm'},
    {'day': 'Sunday', 'time': '10:00am-5:30pm'},
  ];
  vm.admissions = [
    {age: 'Adults', price: '$25'},
    {age: 'Students', price: '$17'},
    {age: 'Seniors', price: '$15'}
  ]

};
