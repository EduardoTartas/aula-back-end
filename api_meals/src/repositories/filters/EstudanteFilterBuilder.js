// src/repositories/filters/EstudanteFilterBuilder.js
import { Types } from 'mongoose';
import Turma from '../../models/Turma.js'; // ou utilize um TurmaRepository, caso prefira

class EstudanteFilterBuilder {
  constructor() {
    this.filtros = {};
  }

  // Exemplo de filtro por matrícula (busca case-insensitive)
  comMatricula(matricula) {
    if (matricula) {
      this.filtros.matricula = { $regex: matricula, $options: 'i' };
    }
    return this;
  }

  // Exemplo de filtro por nome (busca case-insensitive)
  comNome(nome) {
    if (nome) {
      this.filtros.nome = { $regex: nome, $options: 'i' };
    }
    return this;
  }

  // Exemplo de filtro por turma. Caso seja um ObjectId válido, filtra diretamente;
  // caso contrário, faz a busca pela turma via código_suap (ou outro campo que desejar).
  async comTurma(turma) {
    if (turma) {
      if (Types.ObjectId.isValid(turma)) {
        // Se já for um ObjectId, faz o populate direto
        this.filtros.turma = turma;
        const turmaEncontrada = await Turma.findById(turma);
        if (!turmaEncontrada) {
          // Caso não exista, força a busca “vazia”
          this.filtros.turma = { $in: [] };
        }
      } else {
        // Se for string, por exemplo código_suap
        const turmaEncontrada = await Turma.findOne({
          codigo_suap: { $regex: turma, $options: 'i' },
        });
        if (turmaEncontrada) {
          this.filtros.turma = turmaEncontrada._id;
        } else {
          // Força a busca “vazia”
          this.filtros.turma = { $in: [] };
        }
      }
    }
    return this;
  }

  // Retorna o objeto de filtros construído
  build() {
    return this.filtros;
  }
}

export default EstudanteFilterBuilder;
