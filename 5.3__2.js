let x = 1;
function checkType(x) {
  let type = typeof x;
  if (isNaN(x) && type != "string" && type != "boolean") {
    console.log(`Тип Х не определен`);
  } else {
    switch (type) {
      case "number":
        console.log(`${x} - Number`);
        break;
      case "boolean":
        console.log(`${x} - Boolean`);
        break;
      case "string":
        console.log(`${x} - String`);
        break;
      default:
        console.log(`Тип Х не определен`);
        break;
    }
  }
}
checkType(x);
