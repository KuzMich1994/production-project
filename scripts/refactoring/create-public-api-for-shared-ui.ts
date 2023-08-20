import { Directory, Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
const files = project.getSourceFiles();

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUIDirectory?.getDirectories();

const isAbsolute = (value: string) => {
  const layers = ['app', 'shared', 'features', 'pages', 'widgets', 'entities'];
  return layers.some((layer) => value.startsWith(layer));
};

const getNestedPaths = (nestedDirectories: Directory[]) => {
  const exports = nestedDirectories.map((nestedDirectory): string | undefined => {
    const result: string[] = [];

    if (!nestedDirectory.getDirectories().length) {
      nestedDirectory.getSourceFiles().forEach((file) => {
        if ((file.getBaseName().includes('.ts') || file.getBaseName().includes('.tsx')) && !file.getBaseName().includes('.stories.')) {
          result
            .push(
              // eslint-disable-next-line max-len
              `export * from './${nestedDirectory.getBaseName()}/${file.getBaseName().replace(/\.(ts|tsx)$/, '')}';
`,
            );
        }
      });
    }
    nestedDirectory.getDirectories().forEach((dir) => {
      result
        .push(
          `export * from './${nestedDirectory.getBaseName()}/${dir.getBaseName()}/${dir.getBaseName()}';
`,
        );
    });

    return result.join('');
  });

  return `${exports.join('')}`;
};

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/sort.ts`;
  const indexFile = directory.getSourceFile(indexFilePath);
  const directories = directory.getDirectories();
  const sourceCode = directories.length ? getNestedPaths(directories) : `export * from './${directory.getBaseName()}';
`;

  if (!indexFile) {
    const file = directory
      .createSourceFile(
        indexFilePath,
        sourceCode,
        { overwrite: true },
      );

    file.save();
  } else {
    indexFile.removeText();
    indexFile.insertText(0, sourceCode);
  }
});

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithoutAlias = value.replace('@/', '');

    const segments = valueWithoutAlias.split('/');

    const isSharedLayer = segments?.[0] === 'shared';
    const isUiSlice = segments?.[1] === 'ui';

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const namedImports = importDeclaration.getNamedImports().map((i) => i.getName());
      const defaultImport = importDeclaration.getDefaultImport()?.getText();
      importDeclaration.removeDefaultImport();
      importDeclaration.removeNamedImports();
      if (defaultImport) {
        importDeclaration.addNamedImports([...namedImports, defaultImport]);
      } else {
        importDeclaration.addNamedImports(namedImports);
      }

      const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
