const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const toCamelCase = require('../toCamelCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(toCamelCase(sliceName));
  const componentNameKebab = sliceName;
  const schemaName = `${sliceName}-schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `import ${componentName} from './ui/${componentNameKebab}/${componentNameKebab}';
import { ${firstCharUpperCase(toCamelCase(schemaName))} } from './model/types/${schemaName}';

export {
  ${componentName},
  ${firstCharUpperCase(toCamelCase(schemaName))},
};
`,
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
