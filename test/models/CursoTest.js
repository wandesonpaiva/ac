var assert = require('assert');
var should = require('should');

var Curso = require('../../app/models/Curso.js');

describe('# Teste da classe Cruso', function() {
  describe('## Construtores', function() {
      it('Curso VALIDO', function() {
        var curso = new Curso("TADS", "01404");
        curso.should.not.be.null;
      });
  });
});
