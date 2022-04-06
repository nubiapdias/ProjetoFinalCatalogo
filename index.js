import express from "express";
import { routes } from "./src/routes/routes.js";
import path from "path";

const app = express();
const port = 3000;
let __dirname = path.resolve(path.dirname(""));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, (req, res) => {
  console.log(`rodando na porta ${port}`);
});
