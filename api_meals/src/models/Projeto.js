import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import Estudante from "./Estudante.js"; //Se não tiver o populate falha

class Projeto {
  constructor() {
    const schema = new mongoose.Schema(
      {
        descricao: { type: String, required: [true, "O nome do projeto é obrigatório!"] },
        professor_responsavel: {type: String, required: [true, "O professor é obrigatório!"]},
        data_inicio: { type: Date, required: [true, "A data de início é obrigatória!"] },
        data_termino: { type: Date, required: [true, "A data de término é obrigatória!"] },
      
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
        lista_estudantes: [
          {
            estudante: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "estudantes",
              required: true
            },
            ativo: { type: Boolean, required: true, default: true },
          }
        ],
      },
      { timestamps: true, versionKey: false }
    );

    schema.plugin(mongoosePaginate);
    this.model = mongoose.model("projetos", schema);
  }
}

export default new Projeto().model;
