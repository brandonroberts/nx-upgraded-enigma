import {
  SchematicTestRunner,
  UnitTestTree
} from '@angular-devkit/schematics/testing';

export async function generateWorkspace(
  name: string,
  runner: SchematicTestRunner,
  tree: UnitTestTree
) {
  return await runner
    .runExternalSchematicAsync(
      '@nrwl/workspace',
      'workspace',
      {
        name
      },
      tree
    )
    .toPromise();
}
