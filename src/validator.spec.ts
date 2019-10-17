import { validator, setErrorMessage } from './validator';

const VALIDATOR_TYPE = 'MATCH_FIELD';

describe('fonk-match-field-validator specs', () => {
  it('should return succeeded validation when it feeds value equals undefined', () => {
    // Arrange
    const value = void 0;
    const values = {};
    const customArgs = { field: 'test' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    // Arrange
    const value = null;
    const values = {};
    const customArgs = { field: 'test' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    // Arrange
    const value = '';
    const values = {};
    const customArgs = { field: 'test' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should throw an error when it feeds values equals undefined', () => {
    // Arrange
    const value = 'test';
    const values = void 0;
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals null', () => {
    // Arrange
    const value = 'test';
    const values = null;
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals empty string', () => {
    // Arrange
    const value = 'test';
    const values = '';
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals string', () => {
    // Arrange
    const value = 'test';
    const values = 'test values';
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals number', () => {
    // Arrange
    const value = 'test';
    const values = 1;
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals boolean', () => {
    // Arrange
    const value = 'test';
    const values = true;
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals empty array', () => {
    // Arrange
    const value = 'test';
    const values = [];
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds values equals array', () => {
    // Arrange
    const value = 'test';
    const values = [1, 2];
    const customArgs = { field: 'test' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual('Must provide valid "values" object');
    }
  });

  it('should throw an error when it feeds customArgs equals undefined', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = void 0;

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '' } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs equals null', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = null;

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '' } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.field equals undefined', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = { field: void 0 };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '' } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.field equals null', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = { field: null };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '' } in ValidationSchema`
      );
    }
  });

  it('should throw an error when it feeds customArgs.field equals emtpy string', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = { field: '' };

    // Act
    try {
      validator({ value, values, customArgs });
    } catch (error) {
      // Assert
      expect(error).toEqual(
        `Must provide valid customArgs: { field: '' } in ValidationSchema`
      );
    }
  });

  it('should return failed validation when it feeds field in customArgs and it does not match with values field', () => {
    // Arrange
    const value = 'test';
    const values = { field: '', field3: 'test' };
    const customArgs = { field: 'field2' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'The field must match with field2',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds field in customArgs and it matchs with values field but it has not same value', () => {
    // Arrange
    const value = 'test';
    const values = { field: '', field2: 'anotherValue' };
    const customArgs = { field: 'field2' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'The field must match with field2',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds field in customArgs and it matchs with values field', () => {
    // Arrange
    const value = 'test';
    const values = { field: '', field2: 'test' };
    const customArgs = { field: 'field2' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return succeeded validation when it feeds nested field in customArgs and it matchs with values field', () => {
    // Arrange
    const value = 'test';
    const values = { field: '', nested: { field2: 'test' } };
    const customArgs = { field: 'nested.field2' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds nested field in customArgs and it matchs with values field but it has not same value', () => {
    // Arrange
    const value = 'test';
    const values = { field: '', nested: { field2: 'anotherValue' } };
    const customArgs = { field: 'nested.field2' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'The field must match with nested.field2',
      type: VALIDATOR_TYPE,
    });
  });

  it('should return failed validation when it feeds field in customArgs and it does not match with values field', () => {
    // Arrange
    const value = 'test';
    const values = { field: '', nested: { field3: 'test' } };
    const customArgs = { field: 'nested.field2' };

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'The field must match with nested.field2',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = { field: 'test' };
    const message = 'other message';

    // Act
    const result = validator({ value, values, customArgs, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and message with interpolation', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = { field: 'test' };
    const message = 'other message with interpolation {{field}}';

    // Act
    const result = validator({ value, values, customArgs, message });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message with interpolation test',
      type: VALIDATOR_TYPE,
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    // Arrange
    const value = 'test';
    const values = {};
    const customArgs = { field: 'test' };

    setErrorMessage('other message');

    // Act
    const result = validator({ value, values, customArgs });

    // Assert
    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: VALIDATOR_TYPE,
    });
  });
});
