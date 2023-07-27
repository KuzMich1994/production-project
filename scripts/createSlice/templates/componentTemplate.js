const interfaceConst = 'interface';
const toCamelCase = require('../toCamelCase');

module
  .exports = (componentName, componentNameKebab) => `import { classNames } from '@/shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './${componentNameKebab}.module.scss';

${interfaceConst} ${componentName}Props {
  className?: string;
}

function ${componentName}(props: ${componentName}Props): JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.${toCamelCase(componentName)}, {}, [className])}>
       
    </div>
  );
}

export default memo(${componentName});
`;
