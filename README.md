# Dictnr v0.0.1

Lightweight dictionary

# Install

Available via [Bower](http://bower.io/)

```bash
bower install dictnr
```

Available via [npm](https://www.npmjs.org/)

```bash
npm install dictnr
```

# Usage

```javascript
var d = dictnr({
  foo: 'bar'
});

d.get('foo'); // 'bar'

d.set('baz', 'qux');

d.get('baz'); // 'quz'

d.size(); // 2

d.remove('baz');

d.get('baz'); // undefined

d.clear();

d.size(); // 0
```

# License

Released under the MIT License.
