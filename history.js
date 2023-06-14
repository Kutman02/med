// Загрузка сохраненной истории приема лекарств из localStorage
var historyMedications = JSON.parse(localStorage.getItem("historyMedications")) || [];

// Отображение истории приема лекарств
renderHistoryMedications();

// Отображение истории приема лекарств
function renderHistoryMedications() {
  var historyList = document.getElementById("history-list");
  historyList.innerHTML = ""; // Очистка списка истории

  for (var i = 0; i < historyMedications.length; i++) {
    var medication = historyMedications[i];

    var listItem = document.createElement("li");
    listItem.innerText = `${medication.name} - ${medication.datetime}`;

    historyList.appendChild(listItem);
  }
}
