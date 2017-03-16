    function map(coordinates) {
      console.log(coordinates);
        setTimeout(function() {
            var userLatLng = new google.maps.LatLng(coordinates[0][0], coordinates[0][1]);

            var myOptions = {
                zoom: 16,
                center: userLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
            for (var i = 0; i < coordinates.length; i++) {
                var marker = new google.maps.LatLng(coordinates[0][0], coordinates[0][1]);
                new google.maps.Marker({
                    map: mapObject,
                    position: marker
                });
            }
        }, 1000);
    }

};
