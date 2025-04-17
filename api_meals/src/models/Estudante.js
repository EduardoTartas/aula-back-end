import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import Turma from "./Turma.js"; //Se não tiver o populate falha

class Estudante {
  constructor() {
    const schema = new mongoose.Schema(
      {
        matricula: { type: String, required: true },
        nome: { type: String, required: true },
        ativo: { type: Boolean, required: true, default: true },
        cursos_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "cursos",
          required: true
        },
        turma_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "turmas",
          required: true
        },
      },
      { timestamps: true, versionKey: false }
    );

    schema.plugin(mongoosePaginate);
    this.model = mongoose.model("estudantes", schema);
  }
}

export default new Estudante().model;