const express = require("express");
const app = express();

app.use(express.json());

const decisionRoutes = require("./api/routes/decision.routes.js");
const errorHandler = require("./middlewares/error-handler.js");

app.use("/api", decisionRoutes);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
