function calculateSum() {
  let number = prompt("Введіть число (або 'закінчити', щоб підрахувати суму):");
 
  if (number === "закінчити") {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += parseFloat(arguments[i]);
    }
    alert("Сума введених чисел: " + sum);
  } else if (!isNaN(number)) {
    calculateSum.apply(null, [...arguments, number]);
  } else {
    alert("Будь ласка, введіть число або 'закінчити'.");
  }
}
calculateSum();