var assert = require('assert');
var should = require('should');

var Requerimento = require('../../app/models/Requerimento.js');
var Aluno = require('../../app/models/Aluno.js');

describe('# Teste da classe Requerimento', function() {
  describe('## Construtores', function() {
      it('Aluno não atingiu limite de aproveitamento ou certificação', function() {
        var aluno1 = new Aluno("Wandeson Paiva", "20131014040340", 450);
        var requerimento = new Requerimento(aluno1 ,null,"aproveitamento");

        requerimento.status.should.be.equal("confirmado");
      });


  });
});
