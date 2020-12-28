let marinaZhvetaeva = new Map([
  ["зверю", "берлога"],
  ["страннику", "дорога"],
  ["мертвому", "дроги"],
  ["женщине", "лукавить"],
  ["царю", "править"],
]);

for (let name of marinaZhvetaeva.keys()) {
  let x = marinaZhvetaeva.get(name);
  console.log(`Ключ - ${name}, значение - ${x}`);
}
