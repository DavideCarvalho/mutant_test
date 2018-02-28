const requiredParameter = parameter => {
  const parameterError = new Error(`Parameter ${parameter} is missing.`);
  typeof Error.caputureStackStrace === "function"
    ? Error.captureStackTrace(parameterError, requiredParameter)
    : "";
  throw parameterError;
};
const somaDoisNumeros = ({
  x = requiredParameter('x'),
  y = requiredParameter('y')
}) => x + y;

const longestWord = ({
  phrase = requiredParameter('phrase')
}) => {
  const array = phrase.match(/[a-z0-9]+/gi);
  const sorted = array.sort((a,b) => b.length - a.length);
  return sorted[0];
}

const api = {
  somaDoisNumeros,
  longestWord
};
module.exports = api;
