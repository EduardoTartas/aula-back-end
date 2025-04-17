// /src/models/Curso.js

import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

class Curso {
  constructor() {
    const cursoSchema = new mongoose.Schema(
      {
        codigo: { type: String, required: [true, "O codigo do curso é obrigatório!"] },
        nome: { type: String, ndex: true, required: [true, "O nome do curso é obrigatório!"] },
        contra_turnos: {
          type: {
            segunda: { type: Boolean, required: true, default: false },
            terca: { type: Boolean, required: true, default: false },
            quarta: { type: Boolean, required: true, default: false },
            quinta: { type: Boolean, required: true, default: false },
            sexta: { type: Boolean, required: true, default: false },
            sabado: { type: Boolean, required: true, default: false },
            domingo: { type: Boolean, required: true, default: false },
          }, required: [true, "Os contra-turnos são obrigatórios!"],
          _id: false
        },
      },
      {
        timestamps: true,
        versionKey: false
      }
    );
    cursoSchema.plugin(mongoosePaginate);
    this.model = mongoose.model('cursos', cursoSchema);
  }
}
export default new Curso().model;