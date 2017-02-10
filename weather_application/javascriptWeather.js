$(document).ready(function(){
  var lat;
  var long;
  var fTemp;
  var cTempt;
  var tempSwap = true;
  $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
    long = data2.lon;


    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=a50e89eebe244240c8b110466179eba6';


  $.getJSON(api, function(data){
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    fTemp = (kTemp * 9/5 - 459.67).toFixed(2);
    cTemp = (kTemp - 273.15).toFixed(2);
    windSpeed = (2.237*(windSpeed)).toFixed(1);


    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp+"&#8457");
    $("#fTemp").click(function(){
      if(tempSwap == false){
        $("#fTemp").html(cTemp +"&#8451");
        tempSwap = true;
      }
      else {
        $("#fTemp").html(fTemp +"&#8457");
        tempSwap = false;
      }

    });

    $("#windSpeed").html(windSpeed + " MPH");

    if(fTemp >= 60){
      $("#weatherIcon").addClass("fa fa-sun-o fa-2x");
    }
    else if (weatherType.includes("rain")) {
      $("#weatherIcon").addClass("fa fa-tint fa-2x");
    }
    else if (weatherType.includes("snow")) {
      $("#weatherIcon").addClass("fa fa-snowflake-o fa-2x");
    }
    else if (fTemp >= 50){
      $("#weatherIcon").addClass("fa fa-cloud fa-2x");
    }
    else {
      $("#weatherIcon").addClass("fa fa-question-circle fa-2x");
    }




    });

  });

});
