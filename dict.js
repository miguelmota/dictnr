(function(global) {

  'use strict';

  var dict = (function() {
    var Dict;

    Dict = function(elements) {
      if (!(this instanceof Dict)) {
        return new Dict(elements); 
      }
      this.elements = elements || {};
    };

    Dict.prototype.has = function(key) {
      return {}.hasOwnProperty.call(this.elements, key);
    };

    Dict.prototype.get = function(key) {
      return this.has(key) ? this.elements[key] : undefined;
    };

    Dict.prototype.set = function(key, val) {
      this.elements[key] = val;
    };

    Dict.prototype.remove = function(key) {
      delete this.elements[key];
    };

    Dict.prototype.size = function() {
      return this.keys().length;
    };

    Dict.prototype.keys = function() {
      return Object.keys(this.elements);
    };

    Dict.prototype.vals = function() {
      return this.keys().map(function(key) {
        return this.elements[key]; 
      }.bind(this));
    };

    Dict.prototype.clear = function() {
      for (var k in this.elements) {
        delete this.elements[k];
      }
    };

    return Dict;

  })();

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = dict;
    }
    exports.dict = dict;
  } else if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return dict;
    });
  } else {
    global.dictnr = dict;
  }

})(this);
