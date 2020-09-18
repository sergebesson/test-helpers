# test-helpers

Librairie d'aide pour les tests

elle comprend :

* example
* spyOnService
* chai

***

## example

Permet de générer des cas de tests
Exemple d'utilisation :

Avec des arrays

```javascript
example([
  ["var1", "var2", "expected"],
  [1, "value 1 of var2", "expected1"],
  [2, "value 2 of var2", "expected2"],
  [3, "value 3 of var2", "expected3"],
], function () {
  it("should ......", function () {
    // WHEN
    const result = functionToTest(this.var1, this,var2);
    // THEN
    expect(result).to.be.equal(this.expected);
  });
});
```

Avec des objects

```javascript
example([
  {var1:1, var2:"value 1 of var2", expected:"expected1"},
  {var1:2, var2:"value 2 of var2", expected:"expected2"},
  {var1:3, var2:"value 3 of var2", expected:"expected3"},
], function () {
  it("should ......", function () {
    // WHEN
    const result = functionToTest(this.var1, this,var2);
    // THEN
    expect(result).to.be.equal(this.expected);
  });
});
```

## spyOnService

Permet de faire des spy sur toutes les méthodes d'un service

## chai

Patch de chai (<http://chaijs.com/>), pour ajouter sinon-chai et la méthode lookLike.
La méthode lookLike permet de faire un sinon.match (<http://sinonjs.org/releases/v2.1.0/matchers/>) sur un objects
exemple :

`expect(result).to.lookLike({ onSuccess: match.func });`

cela vérifie que la propriété "onSuccess" est bien une fonction.
