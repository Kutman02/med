//// Загрузка сохраненных лекарств из localStorage
//var medications = JSON.parse(localStorage.getItem("medications")) || [];
//var historyMedications = JSON.parse(localStorage.getItem("historyMedications")) || [];

//// Отображение списка приема лекарств
//renderMedications();

//// Добавление лекарства в список приема
//$("#medication-form").submit(function(e) {
//  e.preventDefault();
//  addMedication();
//});

//// Удаление выбранных лекарств
//$("#delete-selected").click(function() {
//  deleteSelectedMedications();
//});

//// Добавление лекарства в список приема
//function addMedication() {
//  var name = $("#medication-name").val();
//  var datetime = $("#medication-datetime").val();
  
//  if (name && datetime) {
//    var medication = {
//      name: name,
//      datetime: datetime
//    };
    
//    medications.push(medication);
//    renderMedications();
    
//    // Очистка полей формы
//    $("#medication-name").val("");
//    $("#medication-datetime").val("");
    
//    // Сохранение обновленного массива лекарств в localStorage
//    localStorage.setItem("medications", JSON.stringify(medications));
//  }
//}

//// Удаление выбранных лекарств из списка приема
//function deleteSelectedMedications() {
//  var selectedMedications = $("#medication-list input:checked");
  
//  if (selectedMedications.length > 0) {
//    selectedMedications.each(function() {
//      var index = $(this).data("index");
//      var deletedMedication = medications.splice(index, 1)[0];
//      historyMedications.push(deletedMedication);
//    });
    
//    renderMedications();
    
//    // Сохранение обновленных массивов лекарств в localStorage
//    localStorage.setItem("medications", JSON.stringify(medications));
//    localStorage.setItem("historyMedications", JSON.stringify(historyMedications));
//  }
//}

//// Отображение списка приема лекарств
//function renderMedications() {
//  var medicationList = $("#medication-list");
//  medicationList.empty(); // Очистка списка приема лекарств
  
//  for (var i = 0; i < medications.length; i++) {
//    var medication = medications[i];
    
//    var listItem = $("<li>");
//    var checkbox = $("<input>").attr({
//      type: "checkbox",
//      "data-index": i
//    });
    
//    listItem.text(`${medication.name} - ${medication.datetime}`);
//    listItem.prepend(checkbox);
    
//    medicationList.append(listItem);
//  }
//}

////111

// Получение сохраненных лекарств из localStorage
var medications = JSON.parse(localStorage.getItem("medications")) || [];
var historyMedications = JSON.parse(localStorage.getItem("historyMedications")) || [];

// Обработка отправки формы
document.getElementById("medication-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращение перезагрузки страницы

  // Получение значений полей формы
  var medicationName = document.getElementById("medication-name").value;
  var medicationDatetime = document.getElementById("medication-datetime").value;

  // Проверка на пустые значения
  if (medicationName.trim() === "" || medicationDatetime.trim() === "") {
    alert("Пожалуйста, заполните все поля формы.");
    return;
  }

  // Создание объекта лекарства
  var medication = {
    name: medicationName,
    datetime: medicationDatetime
  };

  // Добавление лекарства в список
  medications.push(medication);
  historyMedications.push(medication); // Добавление лекарства в историю

  // Сохранение лекарств в localStorage
  localStorage.setItem("medications", JSON.stringify(medications));
  localStorage.setItem("historyMedications", JSON.stringify(historyMedications));

  // Очистка полей формы
  document.getElementById("medication-name").value = "";
  document.getElementById("medication-datetime").value = "";

  // Обновление списка лекарств
  updateMedicationList();
});

// Обработка удаления выбранных лекарств
document.getElementById("delete-selected").addEventListener("click", function() {
  var selectedItems = document.querySelectorAll("#medication-list input[type='checkbox']:checked");

  // Удаление выбранных лекарств из списка
  selectedItems.forEach(function(item) {
    var index = item.getAttribute("data-index");
    medications.splice(index, 1);
  });

  // Сохранение обновленного списка лекарств в localStorage
  localStorage.setItem("medications", JSON.stringify(medications));

  // Обновление списка лекарств
  updateMedicationList();
});

// Функция обновления списка лекарств
function updateMedicationList() {
  var listContainer = document.getElementById("medication-list");
  listContainer.innerHTML = "";

  medications.forEach(function(medication, index) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
      <input type="checkbox" data-index="${index}">
      <span>${medication.name} - ${medication.datetime}</span>
    `;
    listContainer.appendChild(listItem);
  });

  // Добавление удаленных лекарств в историю
  var historyListContainer = document.getElementById("history-list");
  historyListContainer.innerHTML = "";

  historyMedications.forEach(function(medication) {
    var historyListItem = document.createElement("li");
    historyListItem.innerText = medication.name + " - " + medication.datetime;
    historyListContainer.appendChild(historyListItem);
  });
}

// Инициализация списка лекарств при загрузке страницы
updateMedicationList();
