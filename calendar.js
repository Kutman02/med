// Функция для получения текущей даты
function getCurrentDate() {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  var day = currentDate.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
}

// Создание календаря
function createCalendar() {
  var calendarDiv = document.getElementById('calendar');
  var currentDate = getCurrentDate();
  calendarDiv.innerHTML = currentDate;
}

// Вызов функции создания календаря
createCalendar();
