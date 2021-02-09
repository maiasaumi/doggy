const express = require("express");
const knex = require("./knex");

const app = express();

app.use(express.json());

app.get("/", async (_, res) => {
  /*const data = await knex.select().table("doggyplace");
  res.status(200);
  res.send(data);*/
  res.send("Hello World");
});

/*app.post("/doggyplace/post", async (_, res) => {
  await knex("doggyplace").insert({
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    adress: req.body.adreess,
    tel: req.body.tel,
    fee: req.body.fee,

    id: 4,
    name: "lala",
    type: "dog run",
    adress: "Ehime",
    tel: 123456789,
    fee: "for free",
  });
  const data = await knex.select().table("doggyplace");
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥");
  res.status(200);
  res.send(data);
});*/

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`🎉 Server running at https://localhost:${port}!`);
});
