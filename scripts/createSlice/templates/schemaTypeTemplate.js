const firstCharUpperCase = require('../firstCharUpperCase');
const toCamelCase = require('../toCamelCase');

module.exports = (sliceName) => `export interface ${firstCharUpperCase(toCamelCase(sliceName))}Schema {}
`;
