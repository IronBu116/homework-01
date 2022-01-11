export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          statusValidate = !data;
        } else {
          statusValidate = data.toString().trim() === "";
        }
        break;
      }
      case "isEmail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }
      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }
      case "min": {
        statusValidate = data.length < config.value;
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    /*     console.log(fieldName);
    console.log(config[fieldName]); */
    for (const validateMethod in config[fieldName]) {
      /*       console.log(validateMethod);
      console.log(data[fieldName]);
      console.log(config[fieldName][validateMethod]); */
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      /*       console.log(error);
      console.log("---------------------------"); */
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
