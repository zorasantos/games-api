const customMessages = (field: string) => {
  return {
    'string.empty': `${field} field cannot be empty.`,
    'any.required': `${field} field is required`
  };
};

export { customMessages };
