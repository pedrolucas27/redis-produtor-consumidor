const { db } = require("./index");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const inserir = async () => {
  console.log("Inserindo...");

  const valor = Math.floor(Math.random() * 1000);
  await db.rPush("fila_1", `${valor}`);
};

(async () => {
  for (;;) {
    await inserir();
    await sleep(1000);
  }
})();
