var global = [];
$(function() {
    if(navigator.geolocation) {
        var fallback = setTimeout(function() { fail('10 seconds expired'); }, 10000);
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                clearTimeout(fallback);
                console.log('pos', pos);
                var point = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                new google.maps.Geocoder().geocode({'latLng': point}, function (res, status) {
                    if(status == google.maps.GeocoderStatus.OK && typeof res[0] !== 'undefined') {
                           zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                           
                          //postalGlobal = zip[1];
                        if(zip) {
                            $("._res").html('Zip code is ' +  zip[1]);
                            window.global = zip;
                        } else fail('Failed to parse');
                    } else {
                        fail('Failed to reverse');
                    }
                });
            }, function(err) {
                fail(err.message);
            }
        );
    } else {
        $("._res").html('Geolocation unsupported!');
    }
    function fail(err) {
        console.log('err', err);
        $("._res").html('Error ' + err);
    }

    $.simpleWeather({
    zipcode: '07001',
    woeid: '',
    location: '',
    unit: 'f',
    success: function(weather) {
      html="";
      //html += "<ul class=\"section group\">";
      html += "     <li class=\"col span_1_of_3\">";
      html += "<a href=\"http://www.weather.com/weather/hourbyhour/graph/";
      html += window.global[1];
      html += "\">";
      html += "       <img src=\"img\/plainWeather\/";
      html += weather.code;
      html += ".png\" alt=\"";
      html += weather.currently;
      html += "\" \/>";
      html += "</a>"
      html += "       <h2>Now<\/h2>";
      html += "       <p>";
      html += weather.temp;
      html += " &deg;F<\/p>";
      html += "       <p>";
      html += weather.currently;
      html += "<\/p>";
      html += "     <\/li>";
      html += "     <li class=\"col span_1_of_3\">";
      html += "<a href=\"http://www.weather.com/weather/today/";
      html += global[1];
      html += "\">";
      html += "       <img src=\"img\/plainWeather\/";
      html += weather.todayCode;
      html += ".png\" alt=\"";
      html += weather.forecast;
      html += "\" \/>";
      html += "</a>"
      html += "       <h2>Today<\/h2>";
      html += "       <p>";
      html += weather.high;
      html += " &deg;F &#124; ";
      html += weather.low; 
      html += " &deg;F<\/p>";
      html += "       <p>";
      html += weather.forecast;
      html += "<\/p>";
      html += "     <\/li>";
      html += "     <li class=\"col span_1_of_3\">";
      html += "<a href=\"http://www.weather.com/weather/tomorrow/";
      html += global[1];
      html += "\">";
      html += "       <img src=\"img\/plainWeather\/";
      html += weather.tomorrow.code;
      html += ".png\" alt=\"";
      html += weather.tomorrow.forecast;
      html += "\" \/>";
       html += "</a>"
      html += "       <h2>Tomorrow<\/h2>";
      html += "       <p>";
      html += weather.tomorrow.high;
      html += " &deg;F &#124; ";
      html += weather.tomorrow.low;
      html += " &deg;F<\/p>";
      html += "       <p>";
      html += weather.tomorrow.forecast;
      html += "<\/p>";
      html += "     <\/li>";
      //html += "   <\/ul>";




  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});