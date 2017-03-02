var Requerimento = function(aluno, componente_curricular, tipo){
  if (aluno.ch_apr_cert >= 1080){
    this.status = "negado";
  } else if (aluno_cursou_componente(componente_curricular, aluno)) {
    this.status = "negado";
  } else {
    this.status = "confirmado";
  }

  this.aluno = aluno;
  this.componente_curricular = componente_curricular;
  this.tipo = tipo;

  function aluno_cursou_componente(componente_curricular, aluno){
    var cursou =  false;
    var tamanho = aluno.disciplinas.length;

    for(var i = 0; i < tamanho; i++){
      if (aluno.disciplinas[i].componente_curricular.nome == componente_curricular.nome && aluno.disciplinas[i].situacao == "Reprovado"){
        cursou = true;
      }
    }
    return cursou;
  }


};

module.exports = Requerimento;
