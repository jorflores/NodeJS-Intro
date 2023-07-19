const mongoose = require("mongoose");
require("dotenv").config();

const SW = require("./model/starwars");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => console.log("MongoDB ready"))
  .catch(console.error);

async function agregarPersonaje() {
  let sw = new SW({
    routeName: "obiwan",
    name: "Obi Wan",
    role: "NA",
    age: 100,
    forcePoints: 5000,
  });

  await sw.save();
}

async function getAllChars() {
  let chars = await SW.find();
  console.log(chars);
}
//getAllChars();
//agregarPersonaje();
