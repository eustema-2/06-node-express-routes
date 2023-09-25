const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Query params /user?id=20
app.get("/user", (req, res) => {
  console.log(req.query.id);
  res.send("Pagina User ID " + req.query.id);
});

// GET USER by ID /user/:id
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("Pagina User ID " + req.params.id);
});

// GET /blog/:year/:month
app.get("/blog/:year/:month", (req, res) => {
  console.log(req.params);
  res.send(
    `<h1>Lista posts del mese di ${req.params.month} dell'anno ${req.params.year}</h1>`
  );
});

app.get("/me", (req, res) => {
  const data = {
    firstName: "Samuele",
    lastName: "Madrigali",
    age: 32,
  };
  res.json(data);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Questa è una richiesta POST");
});

app.get("/chi-siamo", (req, res) => {
  res.send("<h1>Chi Siamo</h1>");
});

app.listen(PORT, () => {
  console.log(`App in ascolto sulla porta ${PORT}`);
});
