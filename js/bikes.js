/* jshint loopfunc: true */

function Bike(manufacturer, place, distance) {
    // this.serial = serial;
    // this.query = query;
    this.manufacturer = manufacturer;
    // this.color = color;
    this.place = place;
    this.distance = distance;
}

var places_array = [];

Bike.prototype.searchBikes = function(callback) {
    var lon_lat = [];
    // serial = this.serial;
    manufacturer = this.manufacturer;
    // color = this.color;
    place = this.place;
    distance = this.distance;

    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + place + '&distance=' + distance + '&manufacturer=' + manufacturer + '&stolenness=proximity')
        .then(function(response) {
            $('.showBikes').text("");
            str =
                "<table class='table table-striped'>" +
                '<thead>' +
                '<tr>' +
                '<th>Bike Title</th>' +
                '<th>Stolen Location</th>' + '<th>Serial #</th>' + '<th>Image</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>';
            for (var i = 0; i < response.bikes.length; i++) {
                str = str + '<tr>' + '<td>' + response.bikes[i].title + '</td>';
                str = str + '<td>' + response.bikes[i].stolen_location + '</td>';
                str = str + '<td>' + response.bikes[i].serial + '</td>';
                if (response.bikes[i].thumb === null) {
                    str = str + '<td><img src="http://placehold.it/300x300" alt = "no image"></td>' +
                        '</tr>';
                    var stolen_location = response.bikes[i].stolen_location;
                    places_array.push(stolen_location);
                } else {
                    str = str + '<td><img src="' + response.bikes[i].thumb + '"alt = "no image"></td>' +
                        '</tr>';
                }
            }
        }).then(function() {
            str = str + '</tbody>' + '</table>';
            $('.showBikes').append(str);
            for (var i = 0; i < places_array.length; i++) {
                $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + places_array[i] + '&key=AIzaSyC--LYrYUurZ4iJZyiR7wYZCoCAAjme1KM')
                    .then(function(response) {
                        var lon = response.results[0].geometry.location.lng;
                        var lat = response.results[0].geometry.location.lat;
                        coordinates = [lat, lon];
                        lon_lat.push(coordinates);
                        console.log(lon_lat);
                    });
            }
        }).then(function() {
            setTimeout(callback(lon_lat), 2000);
        });
};
exports.bikeModule = Bike;
