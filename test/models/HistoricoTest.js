var assert = require('assert');
var should = require('should');

var Historico = require('../../app/models/Historico.js');
var Disciplina = require('../../app/models/Disciplina.js');
var ComponenteCurricular = require('../../app/models/ComponenteCurricular.js');

describe('# Teste da classe Historico', function() {
  describe('## Construtores', function() {
      it('historico VALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 60)
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        var historico = new Historico([disciplina]);
        historico.should.not.be.null;
      });
  });

  describe('## Métodos', function() {
      it('jaCursouComponenteCurricular VALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 60)
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        var historico = new Historico([disciplina]);
        var resultado = historico.jaCursouComponenteCurricular(componente_curricular);
        resultado.should.be.true;
      });

      it('jaCursouComponenteCurricular INVALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 60);
        var componente_curricular2 = new ComponenteCurricular("Algoritmos", 60);
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        var historico = new Historico([disciplina]);
        var resultado = historico.jaCursouComponenteCurricular(componente_curricular);
        resultado.should.be.false;
      });


      it('cargaHorariaAproveitadaOuCertificada VALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 60);
        var componente_curricular2 = new ComponenteCurricular("POO", 90);
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        var disciplina2 = new Disciplina(componente_curricular2, "aproveitada", "20171", [7,8]);
        var historico = new Historico([disciplina, disciplina2]);
        var resultado = historico.cargaHorariaAproveitadaOuCertificada();
        resultado.should.be.equal(90);
      });

      it('cargaHorariaAproveitadaOuCertificada INVALIDO', function() {
        var componente_curricular = new ComponenteCurricular("Teste de software", 60);
        var componente_curricular2 = new ComponenteCurricular("POO", 90);
        var disciplina = new Disciplina(componente_curricular, "cursando", "20171", [7,8]);
        var disciplina2 = new Disciplina(componente_curricular2, "aproveitada", "20171", [7,8]);
        var historico = new Historico([disciplina, disciplina2]);
        var resultado = historico.cargaHorariaAproveitadaOuCertificada();
        resultado.should.be.not.equal(40);
      });

  });

});
