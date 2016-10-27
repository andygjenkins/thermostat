$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp();

  $('#increaseTemp').on('click', function() {
    thermostat.increaseTemp();
    updateTemp();
  });

  $('#decreaseTemp').on('click', function() {
    thermostat.decreaseTemp();
    updateTemp();
  });

  $('#powerSaveModeOn').on('click', function() {
    thermostat.powerSaveModeOn();
    $('#powerSaveMode').text('on')
    updateTemp();
  });

  $('#powerSaveModeOff').on('click', function() {
    thermostat.powerSaveModeOff();
    $('#powerSaveMode').text('off')
    updateTemp();
  });

  $('#resetTemp').on('click', function() {
    thermostat.resetTemp();
    updateTemp();
  });

  function updateTemp() {
    $('#currentTemperature').text(thermostat.currentTemperature);
    $('#currentTemperature').attr('class', thermostat.colour());
  };

});
