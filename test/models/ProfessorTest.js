var assert = require('assert');
var should = require('should');

var Professor = require('../../app/models/Professor.js');

describe('# Teste da classe Professor', function() {
  describe('## Construtores', function() {
      it('Professor VALIDO', function() {
        var professor = new Professor('87545', 'Minora');
        professor.should.not.be.null;
      });
  });
})
