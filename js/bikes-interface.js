var Bike = require('./../js/bikes.js').bikeModule;

$(document).ready(function() {
  $('#bike-form').submit(function(e){
    e.preventDefault();
    console.log("stuff");
    var manufacturer = $('#manufacturer').val();
    // var color = $('input[name="color"]').val();
    var location = $('#location').val();
    console.log(location);
    var distance = $('#distance').val();
    var newBike = new Bike(manufacturer, location, distance);
    newBike.searchBikes();
  });
});
