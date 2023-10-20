//First task

function calculateIncomeTax() {
  const income = prompt("Введіть свій дохід:");
  const taxRate = prompt("Введіть податкову ставку (%):");
  if (isNaN(income) || isNaN(taxRate)) {
    alert("Будь ласка, введіть числові значення для доходу та податкової ставки.");
    return;
  }
  const tax = (income * taxRate) / 100;
  alert("Податок на прибуток становить: " + tax);
}
calculateIncomeTax();

//Second task

function isEven(number) {
  return number % 2 === 0;
}
let inputNumber = prompt("Введіть число для перевірки на парність:");
if (isNaN(inputNumber)) {
  alert("Будь ласка, введіть число.");
} else {
  const isNumberEven = isEven(inputNumber);
  const message = isNumberEven ? "True" : "False";
  alert(message);
}

//Third task

function compareNumbers() {
  let number1 = prompt("Введіть перше число:");
  let number2 = prompt("Введіть друге число:");
  if (isNaN(number1) || isNaN(number2)) {
    alert("Будь ласка, введіть дійсні числа.");
  } else {
    if (number1 > number2) {
      alert(number1 + " більше за " + number2);
    } else if (number2 > number1) {
      alert(number2 + " більше за " + number1);
    } else {
      alert(number1 + " та " + number2 + " рівні.");
    } 
  }
}
compareNumbers();

//Fourth task 

function checkUserAccess() {
  let userAccess = prompt("Введіть рівень доступу англійською (наприклад, 'admin', 'user', 'guest'):");
  if (userAccess === 'admin') {
    alert("Ви маєте повний доступ до усіх функцій");
  } else if (userAccess === 'user') {
    alert("Ви маєте обмежений доступ для здійснення певних дій");
  } else if (userAccess === 'guest') {
    alert("Ви маєте обмежений доступ як гість");
  } else {
    alert("Невірний рівень доступу. Будь ласка, введіть 'admin', 'user' або 'guest'");
  }
}
checkUserAccess();