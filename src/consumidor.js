const { db } = require("./index");

const consumir = async () => {
  const result = await db.blPop("fila_1", 0);

  if (result) return parseInt(result.element);
  return 0;
};

(async () => {
  for (;;) {
    const result = await consumir();
    console.log("Lendo valor: " + result);
  }
})();
