export const getRandomHtmlId = (prefix = 'i') =>
  `${prefix}${Math.trunc(Math.random() * 10 * 1000000 * 1000000000)}`;
