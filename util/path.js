const path = require("path");
console.log(path.join(__dirname, ".."));
module.exports = path.dirname(require.main.filename);
