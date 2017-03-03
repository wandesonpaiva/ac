var assert = require('assert');
var should = require('should');

var Curso = require('../../app/models/Historico.js');
var Disciplina = require('../../app/models/Disciplina.js');
var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');

describe('# Teste da classe Historico', function() {
  describe('## Construtores', function() {
      it('historico VALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 90)
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        var historico = new Historico([disciplina]);
        historico.should.not.be.null;
      });
  });
});
