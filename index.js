const express = require("express");
const app = express();
const adminRouter = require("./routes/admin");

app.use(adminRouter);
app.listen(3000);
