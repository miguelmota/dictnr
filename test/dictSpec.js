var dictnr = require('../dictnr');

describe('Dictnr', function() {
  it('should create a new dict', function(done) {
    var d = dictnr({foo: 'bar'});
    expect(d.has('foo')).toBeTruthy();
    expect(d.get('foo')).toEqual('bar');
    d.set('baz', 'qux');
    expect(d.get('baz')).toEqual('qux');
    expect(d.size()).toEqual(2);
    d.remove('baz');
    expect(d.has('baz')).toBeFalsy();
    expect(d.size()).toEqual(1);
    expect(d.keys()).toEqual(['foo']);
    expect(d.vals()).toEqual(['bar']);
    d.clear();
    expect(d.size()).toEqual(0);
    expect(d.keys()).toEqual([]);
    done();
  });
});
