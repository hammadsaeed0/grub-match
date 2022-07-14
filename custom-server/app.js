const express = require("express");
var mongoose = require("mongoose");

const cors = require("cors");
const config = require("./config");
const appRouter= require("./route");

const app = express();
const port = config.PORT;


mongoose
  .connect(config.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongodb connected"))
  .catch((e) => console.log("Mongodb connection error",e));

  
//allowing cors
app.use(cors())

//to access request body we used express.json() middleware. It is available in Express v4.160 onwards.
app.use(express.json())


//to access url-encoded request body we used express.urlencoded()
app.use(express.urlencoded({ extended: true }))
appRouter(app)


app.listen(port, () =>  console.log(`Example app listening on port ${port}`));
