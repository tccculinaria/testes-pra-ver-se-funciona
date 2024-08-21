const conectar = require("../database/conexao");

class Usuario {
  constructor({email, senha}) {
    this.nome = email;
    this.idade = senha;
  }

  async cadastrar() {
    try {
      const [cadastro] = await conectar("register")
        .insert({
          nome: this.email,
          idade: this.senha,
        })
        .returning("email");
      return cadastro;
    } catch (error) {
      return error;
    } finally {
      conectar.destroy;
    }
  }
}
module.exports = Usuario;
