# nominate
Gives anonymous functions a name or renames functions at runtime.

```typescript
    const fn = function() {};
    console.log(fn.name); // gives ''

    const namedFn = nominate('myFunction', fn);
    console.log(namedFn.name); // gives 'myFunction'
```

## Why?
This package has been created because `Angular2` does injection via
class names (of course among other *providers*) and decorating/replacing
the constructor leads to Angular2 cannot inject that class anymore, because
it uses the `name` attribute of the constructor `function`.

With `nominate` one is able to inject such a class without any *provide* gluecode.
The new constructor has to only be *nominated* with the name of the old constructor.