var Bike = require('./../js/bikes.js').bikeModule;

// function initialize() {
//     var input = document.getElementById('place');
//     var autocomplete = new google.maps.places.Autocomplete(input);
// }
// google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function() {
    $('#bike-form').submit(function(e) {
        e.preventDefault();
        console.log("stuff");
        var manufacturer = $('#manufacturer').val();
        // var color = $('input[name="color"]').val();
        var place = $('#place').val();
        console.log(place);
        var distance = $('#distance').val();
        var newBike = new Bike(manufacturer, place, distance);
        newBike.searchBikes();
    });
});
