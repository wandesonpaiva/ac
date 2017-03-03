var assert = require('assert');
var should = require('should');

var Disciplina = require('../../app/models/Disciplina.js');
var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');

describe('# Teste da classe ComponenteCurricular', function() {
  describe('## Construtores', function() {
      it('Componente Curricular VALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 90);
        componente_curricular.should.not.be.null;
      });
  });
})
