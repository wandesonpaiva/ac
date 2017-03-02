var Requerimento = function(aluno, disciplina, tipo){
  if (aluno.ch_apr_cert >= 1080){
    this.status = "negado";
  } else {
    this.status = "confirmado";
  }

  this.aluno = aluno;
  this.disciplina = disciplina;
  this.tipo = tipo;
  
};

module.exports = Requerimento;
