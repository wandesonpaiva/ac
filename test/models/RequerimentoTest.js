var assert = require('assert');
var should = require('should');

var Requerimento = require('../../app/models/Requerimento.js');
var Aluno = require('../../app/models/Aluno.js');
var Disciplina = require('../../app/models/Disciplina.js');
var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');

describe('# Teste da classe Requerimento', function() {
    it('Aluno não atingiu limite de aproveitamento ou certificação', function() {
      var aluno = new Aluno("Wandeson Paiva", "20131014040340", 450);
      var requerimento = new Requerimento(aluno,null,"aproveitamento");

      requerimento.status.should.be.equal("confirmado");
    });

    it('Aluno atingiu limite de aproveitamento ou certificação', function() {
      var aluno = new Aluno("Wandeson Paiva", "20131014040340", 1090);
      var requerimento = new Requerimento(aluno,null,"aproveitamento");

      requerimento.status.should.be.equal("negado");
    });

    it('Aluno não reprovou a disciplina', function() {
      var componente1 = new ComponenteCurricular("Teste de software", 60);
      var componente2 = new ComponenteCurricular("POO", 90);
      var componente3 = new ComponenteCurricular("Computador e sociedade", 30);

      var disciplina1 = new Disciplina(componente1, "Aprovado");
      var disciplina2 = new Disciplina(componente2, "Aprovado");

      var aluno = new Aluno("Wandeson Paiva", "20131014040340", 450);
      var requerimento = new Requerimento(aluno,componente3,"aproveitamento");

      requerimento.status.should.be.equal("confirmado");
    });

    it('Aluno reprovou a disciplina', function() {
      var componente1 = new ComponenteCurricular("Teste de software", 60);
      var componente2 = new ComponenteCurricular("POO", 90);

      var disciplina1 = new Disciplina(componente1, "Aprovado");
      var disciplina2 = new Disciplina(componente2, "Reprovado");

      var aluno = new Aluno("Wandeson Paiva", "20131014040340", 450);
      var requerimento = new Requerimento(aluno,componente2,"aproveitamento");

      requerimento.status.should.be.equal("negado");
    });

});
