function Bike(manufacturer, place, distance) {
    // this.serial = serial;
    // this.query = query;
    this.manufacturer = manufacturer;
    // this.color = color;
    this.place = place;
    this.distance = distance;
}

Bike.prototype.searchBikes = function() {
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
                    '<th>Stolen Location</th>' +
                  '</tr>' +
                '</thead>' +
                '<tbody>';
            for (var i = 0; i < response.bikes.length; i++) {
                str = str + '<tr>' + '<td>'+ response.bikes[i].title+'</td>';
                  str = str + '<td>' + response.bikes[i].stolen_location + '</td>' +
                '</tr>';
            }
            console.log(response);
        }).then(function(){
          str = str + '</tbody>' + '</table>';
          $('.showBikes').append(str);
        });

};
exports.bikeModule = Bike;
