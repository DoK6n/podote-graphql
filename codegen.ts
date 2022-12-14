import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'packages/server/src/**/*.gql',
  documents: 'packages/client/src/**/*.graphql',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'packages/client/src/lib/graphql/query/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.graphql.tsx',
        baseTypesPath: '../types.tsx',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
    'packages/client/src/lib/graphql/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    'packages/server/src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
