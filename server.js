const express = require("express");
const app = express();

app.use(express.json());

const decisionRoutes = require("./api/routes/decision.routes.js");

app.use("/api", decisionRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
