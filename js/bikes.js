function Bike( manufacturer, place, distance) {
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

    $.get('https://bikeindex.org/api/v3/search?page=1&per_page=25&location=' + place +'&distance=' + distance  +'&manufacturer=' + manufacturer + '&stolenness=stolen')
    .then(function(response) {
      $('.showBikes').append("<ul>");
      for (var i = 0; i < response.bikes.length; i++) {
        $('.showBikes').append("<li>" + response.bikes[i].title + "</li>");
      }
      $('.showBikes').append("</ul>");

    });

};
exports.bikeModule = Bike;
