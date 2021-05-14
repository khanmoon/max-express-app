const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
const adminRouter = require("./routes/admin");

app.use(adminRouter);
app.listen(3000);
