const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { errorHandler } = require("./src/helpers/apiHelpers");
const contactsRouter = require("./src/routes/contacts");
const usersRouter = require("./src/routes/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

app.use("/api/contacts", contactsRouter);

// POST localhost:8088/api/users/avatars
app.use("/avatars", express.static("public"));

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
