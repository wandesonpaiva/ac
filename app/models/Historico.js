var Historico = function(disciplinas){

  this.disciplinas = disciplinas;

};

Historico.prototype.jaCursouComponenteCurricular = function (componente_curricular) {
  var auxArray = this.disciplinas;
  for (var i = 0; i < auxArray.length; i++) {
    if(auxArray[i].componente_curricular.nome == componente_curricular.nome)
    return true;
  };
  return false;
};

Historico.prototype.cargaHorariaAproveitadaOuCertificada = function () {
  var auxArray = this.disciplinas;
  var totalCh = 0;
  if(auxArray){
    for (var i = 0; i < auxArray.length; i++) {
      if (auxArray[i].situacao == "aproveitada" || auxArray[i].situacao == "certificada"){
        totalCh = totalCh + auxArray[i].componente_curricular.carga_horaria;
      }
    }
  }
  return totalCh;
};


module.exports = Historico;
