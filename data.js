function getCurrentDateTime() {
  var currentDateTime = new Date();
  var hours = currentDateTime.getHours().toString().padStart(2, '0');
  var minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
  var seconds = currentDateTime.getSeconds().toString().padStart(2, '0');
  return hours + ':' + minutes + ':' + seconds;
}

function updateDateTime() {
  var currentDateTimeElement = document.getElementById('currentDateTime');
  currentDateTimeElement.textContent = getCurrentDateTime();
}

// Обновление текущей даты и времени каждую секунду
setInterval(updateDateTime, 1000);
