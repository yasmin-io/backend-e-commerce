const express = require("express");
const routes = require("./routes");
const sequelize = require("/config");

// Why do we use app?
const app = express();
const PORT = process.env.PORT || 3001;

// What does this do again?
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// Why do we use force: ??
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
