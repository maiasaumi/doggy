//require("dotenv").config();
const express = require("express");
const knex = require("../knexfile");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/api/", async (req, res) => {
  try {
    const data = await knex.select().table("doggyplace");
    res.json(data);
  } catch (err) {
    console.error("Error loading doggyplace!", err);
    res.sendStatus(500);
  }
});

/*app.get("/", async (_, res) => {
  // const data = await knex.select().table("doggyplace");
  // res.status(200);
  // res.json(data);
});*/

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

//STEP1: Define your heroku port heroku config:set PORT=3333, heroku config:get PORT
//STEP2: Provision(request) heroku online psql heroku addons:create heroku-postgresql:hobby-dev
//STEP3: After step2 heroku automatically makes database url variable. Make database url variable in .env file.
//STEP4: Heroku config:get DATABASE_URL copy the url and updata .env file
//STEP5: Make a simple get request "Hello World"

/*
done Setup migration and seeding file by 18:30
  -fill out the migrations file template
  -run the migration so that it builds the table in your database (test this by dropping the table, running the server and see if it builds)
  -Next in your config file, set up your seeding directory
  -make a seed file for your table
  -write the functions that will run  your seeding when you start the server (reference truck stops)
Make a get request to display on frontend
  -build a connection to your database so that you can get data from your table and bring it to the front end
  -/data
  Initialize of vue frontend
  -start building some UI for your front end
*/

/*
serve your vue front end
   -you should be able to see the starting template, the one with the view logo 
use AXIOS axios.get(endpoint url to request data)
  -you need to catch this data in a variable so something like const data = axios.get(api endpoint)

follow your truckstops vue.js front end files to render a map and the data from your backend.

*/
