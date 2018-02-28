const requiredParameter = (parameter) => {
  const parameterError = new Error(`Parameter ${parameter} is missing.`);
  typeof Error.caputureStackStrace === 'function' ? Error.captureStackTrace(parameterError, requiredParameter) : '';
  throw parameterError;
}
const somaDoisNumeros = ({
  x=requiredParameter('x'),
  y=requiredParameter('y')
}) => x+y;
const api = {
  somaDoisNumeros
};
module.exports = api;