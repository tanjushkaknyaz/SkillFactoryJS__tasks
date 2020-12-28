let a = prompt("Пожалуйста введите число");
a = +a;
let type = typeof a;
console.log(type);
if (isNaN(a) || type != "number") {
  console.log("Упс, кажется, вы ошиблись!");
} else {
  if (type === "number") {
    if (a % 2 == 0) {
      console.log("Это число является четным");
    } else {
      console.log("Это число является нечетным");
    }
  }
}
