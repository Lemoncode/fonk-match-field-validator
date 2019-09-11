# fonk-match-field-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-match-field-validator/master/ci?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-match-field-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-match-field-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-match-field-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-match-field-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-match-field-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

// TODO: Update description and example.

- Validate if a field of a form ....

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product : 'shoes',
  price: 20,
}
```

We can add a matchField validation to the myFormValues

```javascript
import { matchField } from '@lemoncode/fonk-match-field-validator';

const validationSchema = {
  price: [matchField.validator],
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { matchField } from '@lemoncode/fonk-match-field-validator';

matchField.setErrorMessage('El campo debe de ser numérico');
```

- Locally just override the error message for this validationSchema:

```javascript
import { matchField } from '@lemoncode/fonk-match-field-validator';

const validationSchema = {
  price: [
    {
      validator: matchField.validator,
      message: 'Error message only updated for the validation schema',
    },
  ],
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
