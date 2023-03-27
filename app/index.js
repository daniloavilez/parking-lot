import express from "express";
import swaggerUi from "swagger-ui-express";
import config from "./config.js";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerSpec = swaggerJSDoc({
  explorer: true
});

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.post("/app/billing", function (req, res) {
  res.send("New Billing");
});

app.get("/app/debt", function (req, res) {
  res.send("Obter débito");
});

app.get("/app/balance", function (req, res) {
  res.send("Obter saldo");
});

app.get("/app/sensor", function (req, res) {
  res.send("Obter status da sessão");
});

app.post("/app/sensor", function (req, res) {
  res.send("Obter ID da sessão");
});

app.listen(config.PORT);

console.log(`App is listening in port ${config.PORT}`);
