$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#currentTemperature').text(thermostat.currentTemperature);



  $('#increaseTemp').on('click', function() {
    thermostat.increaseTemp();
      $('#currentTemperature').text(thermostat.currentTemperature);
  });





});
