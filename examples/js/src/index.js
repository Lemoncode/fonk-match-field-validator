import { createFormValidation } from '@lemoncode/fonk';
import { matchField } from '@lemoncode/fonk-match-field-validator';

const myFormValues = {
  login: 'test',
  password: 1234,
  confirmPassword: '',
};

const validationSchema = {
  field: {
    confirmPassword: [
      {
        validator: matchField.validator,
        customArgs: { field: 'password' },
      },
    ],
  },
};

const formValidation = createFormValidation(validationSchema);

Promise.all([
  formValidation.validateField('confirmPassword', 5678, myFormValues),
  formValidation.validateField('confirmPassword', 1234, myFormValues),
]).then(([failedResult, succeededResult]) => {
  document.getElementById('app').innerHTML = `
<div style="flex-grow: 1;margin-left:2rem;">
  <h2>Example with failed result:</h2>

<pre>
  formValidation.validateField('confirmPassword', 5678, myFormValues)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(failedResult, null, 2)}
</pre>
</div>

<div style="flex-grow: 1;">
  <h2>Example with succeeded result:</h2>

<pre>
formValidation.validateField('confirmPassword', 1234, myFormValues)
</pre>

  <h3>Result: </h3>
<pre>
${JSON.stringify(succeededResult, null, 2)}
</pre>
</div>
`;
});
