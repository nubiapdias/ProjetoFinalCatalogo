import express from "express";
import {
  getIndex,
  getDetalhes,
  getDelete,
  getCriar,
  postCriar,
  getEditar,
  postEditar,
} from "../controller/musicasController.js";

export const routes = express.Router();

routes.get("/", getIndex);
routes.get("/detalhes/:id", getDetalhes);
routes.get("/delete/:id", getDelete);
routes.get("/criar", getCriar);
routes.post("/criar", postCriar);
routes.get("/editar/:id", getEditar);
routes.post("/editar/:id", postEditar);
