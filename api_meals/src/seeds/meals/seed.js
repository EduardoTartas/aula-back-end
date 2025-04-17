import "dotenv/config";
import cursoSeed from './cursoSeed.js';
import turmaSeed from './turmaSeed.js';
import usuarioSeed from './usuarioSeed.js';
import estudanteSeed from './estudanteSeed.js';
import estagioSeed from './estagioSeed.js';
import projetoSeed from './projetoSeed.js';
import { conectarBanco } from "../config/dbConnect.js";
import Turma from "../models/Turma.js";
import Estudante from "../models/Estudante.js";



async function seed() {
  await conectarBanco();

  await cursoSeed();
  
  await turmaSeed();
  //await Turma.deleteMany({});

  await estudanteSeed();
  //await Estudante.deleteMany({});

  await projetoSeed();
  await estagioSeed();

  console.log("Seed finalizado com sucesso!");
  process.exit();
}

seed();