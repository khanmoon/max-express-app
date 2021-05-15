const bodyParser = require("body-parser");
const express = require("express");
const rootDir = require("./util/path");
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render("404.pug");
});
app.listen(3000);
