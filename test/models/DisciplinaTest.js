var assert = require('assert');
var should = require('should');

var Disciplina = require('../../app/models/Disciplina.js');
var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');

describe('# Teste da classe Disciplina', function() {
  describe('## Construtores', function() {
      it('Disciplina VALIDA', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 90)
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        disciplina.should.not.be.null;
      });
  });
})
