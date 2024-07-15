const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
const conn = require("../server/database/sequelize/index")

app.use(express.json());
app.use(cors());

const user = require('../server/route/users')
const movie = require('../server/route/movieinfo');
app.use(express.urlencoded({extended: true}));
app.use("/movie",movie)
app.use('/user',user)
// app.get("/", (req, res) => {
//   res.send("Hello from the server!");
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
