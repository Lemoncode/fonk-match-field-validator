import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace matchField {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
