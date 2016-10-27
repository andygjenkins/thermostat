$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);


  $('#temperature-up').click(function() {
    thermostat.upButton();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').click(function() {
    thermostat.downButton();
    $('#temperature').text(thermostat.temperature);
  });

//  function updateTemperature() {
//    $('#temperature').text(thermostat.temperature);
//  };
});
