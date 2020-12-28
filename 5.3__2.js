let x = prompt("Пожалуйста, введите Х");
let type = typeof x;
if (x == NaN) {
  console.log(`Тип Х не определен`);
}
break;
console.log(type);
switch (type) {
  case "number":
    console.log(`${x} - Number`);
    break;
  case "boolean":
    console.log(`${x} - Boolean`);
    break;
  case "string":
    console.log(`${x}String`);
    break;
  default:
    console.log(`Тип Х не определен`);
    break;
}
