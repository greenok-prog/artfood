export const getErrors = (error: any) => {
  let errors: any[] = [];
  const errorValue = error.value?.data;
  if (errorValue) {
    for (let key in errorValue) {
      if (Array.isArray(errorValue[key])) {
        errors = [...errors, ...errorValue[key]];
      } else {
        errors.push(errorValue[key]);
      }
    }
    return errors;
  }
  return errors;
};

export const formatErrors = (errors: any, prefix?: string) => {
  const errorList = errors.value.data.data;
  const res = {};
  for (let key in errorList) {
    if (prefix) {
      res[`${prefix}.${key}`] = errorList[key][0];
    } else {
      res[`${key}`] = errorList[key][0];
    }
  }
  return res;
};
