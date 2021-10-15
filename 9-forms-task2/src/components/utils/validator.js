export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isName": {
        const name = /^[A-Z][a-z]+$|^[А-ЯЁ][а-яё]+$/g;
        statusValidate = !name.test(data);
        break;
      }
      case "isSername": {
        const sername = /^[A-Z][a-z]+$|^[А-ЯЁ][а-яё]+$/g;
        statusValidate = !sername.test(data);
        break;
      }
      case "isYear": {
        const isYear = /^[0-9]+$/g;
        statusValidate = !(
          isYear.test(data) &&
          1910 < Number(data) &&
          Number(data) <= new Date().getFullYear()
        );
        break;
      }
      case "isLink": {
        const isLink = /^https:\/\/\S+\.\S+$/g;
        statusValidate = !isLink.test(data);
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
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
