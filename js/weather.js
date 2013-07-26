$(document).ready(function() {
  $.simpleWeather({
    zipcode: '07001',
    woeid: '',
    location: '',
    unit: 'f',
    success: function(weather) {
      html="";
      //html += "<ul class=\"section group\">";
      html += "     <li class=\"col span_1_of_3\">";
      html += "       <img src=\"";
      html += weather.image;
      html += "\" alt=\"";
      html += weather.currently;
      html += "\" \/>";
      html += "       <h2>Now<\/h2>";
      html += "       <p>";
      html += weather.temp;
      html += " &deg;F<\/p>";
      html += "       <p>CURRENTLY<\/p>";
      html += "     <\/li>";
      html += "     <li class=\"col span_1_of_3\">";
      html += "       <img src=\"http:\/\/l.yimg.com\/a\/i\/us\/nws\/weather\/gr\/";
      html += weather.todayCode;
      html += "d.png\" alt=\"";
      html += weather.forecast;
      html += "\" \/>";
      html += "       <h2>Today<\/h2>";
      html += "       <p>";
      html += weather.high;
      html += " &deg;F \/ ";
      html += weather.low; 
      html += "&deg;F<\/p>";
      html += "       <p>";
      html += weather.forecast;
      html += "<\/p>";
      html += "     <\/li>";
      html += "     <li class=\"col span_1_of_3\">";
      html += "       <img src=\"";
      html += weather.tomorrow.image;
      html += "\" alt=\"";
      html += weather.tomorrow.forecast;
      html += "\" \/>";
      html += "       <h2>Tomorrow<\/h2>";
      html += "       <p>";
      html += weather.tomorrow.high;
      html += " &deg;F \/ ";
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
})