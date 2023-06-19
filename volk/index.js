<!DOCTYPE html>
<html>
<head>
  <style>
    td {
      border: 1px solid black;
      padding: 10px;
      text-align: center;
    }

    .orange {
      background-color: orange;
    }
  </style>
</head>
<body>
  <table id="myTable">
    <!-- Место для генерации таблицы -->
  </table>

  <button onclick="addNumber()">Добавить число</button>

  <script>
    // Задание 1
    var numbers = generateRandomNumbers(30);
    createTable(numbers);

    function generateRandomNumbers(count) {
      var numbers = [];
      for (var i = 0; i < count; i++) {
        var number = Math.floor(Math.random() * 100);
        numbers.push(number);
      }
      return numbers;
    }

    function createTable(numbers) {
      var table = document.getElementById("myTable");
      var rowCounter = 0;
      var cellCounter = 0;

      for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];

        var cell = document.createElement("td");
        cell.innerText = number;

        if (number >= 50) {
          cell.classList.add("orange");
        }

        var row = table.rows[rowCounter];
        if (!row) {
          row = table.insertRow(rowCounter);
        }
        row.appendChild(cell);

        cellCounter++;
        if (cellCounter >= 6) {
          cellCounter = 0;
          rowCounter++;
        }
      }
    }

    // Задание 2
    function addNumber() {
      var table = document.getElementById("myTable");
      var row = table.rows[Math.floor(Math.random() * 5)];
      var cell = document.createElement("td");
      var number = Math.floor(Math.random() * 100);
      cell.innerText = number;

      if (number >= 50) {
        cell.classList.add("orange");
      }

      row.appendChild(cell);
    }
  </script>
</body>
</html>