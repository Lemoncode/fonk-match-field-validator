import {
  FieldValidationFunctionSync,
  parseMessageWithCustomArgs,
} from '@lemoncode/fonk';

const VALIDATOR_TYPE = 'MATCH_FIELD';

let defaultMessage = 'The field must match with {{field}}';
export const setErrorMessage = message => (defaultMessage = message);

const isDefined = value => value !== void 0 && value !== null && value !== '';

interface CustomValidatorArgs {
  field: string;
}

const getValueByCustomArgs = (values, { field }: CustomValidatorArgs) =>
  field.split('.').reduce((value, key) => value[key], values);

const validate = (value, values, customArgs: CustomValidatorArgs) =>
  value === getValueByCustomArgs(values, customArgs);

export const validator: FieldValidationFunctionSync<
  CustomValidatorArgs
> = fieldValidatorArgs => {
  const {
    value,
    values,
    message = defaultMessage,
    customArgs,
  } = fieldValidatorArgs;

  if (!isDefined(customArgs) || !isDefined(customArgs.field)) {
    throw `Must provide valid customArgs: { field: '' } in ValidationSchema`;
  }

  if (!isDefined(values) || typeof values !== 'object') {
    throw `Must provide valid "values" object`;
  }

  const succeeded = !isDefined(value) || validate(value, values, customArgs);

  return {
    succeeded,
    message: succeeded
      ? ''
      : parseMessageWithCustomArgs(
          (message as string) || defaultMessage,
          customArgs
        ),
    type: VALIDATOR_TYPE,
  };
};
