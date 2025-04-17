import { faker } from "@faker-js/faker";
import Estudante from "../../models/Estudante.js";
import Turma from "../../models/Turma.js";

export default async function estudanteSeed() {

  // Serão gerados 100 alunos com turmas aleatorias

  const turmas = await Turma.find({});

  await Estudante.deleteMany({});

  for(let i = 0; i < 100; i++){
    const randomTurma = Math.floor(Math.random() * turmas.length);
    const turma = turmas[randomTurma];
    const matriculaEstudante = faker.string.numeric(13);
    const nomeEstudante = faker.person.fullName();
    const estudante = {
      _id: matriculaEstudante,
      matricula: matriculaEstudante,
      nome: nomeEstudante,
      turma: turma._id,
      ativo: true
    }
    await Estudante.create(estudante);
  }
  console.log("Estudantes gerados com sucesso")
}