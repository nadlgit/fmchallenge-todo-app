export const getRandomHtmlId = (prefix = 'i') => {
  return `${prefix}${Math.trunc(Math.random() * 10 * 1000000 * 1000000000)}`;
};
