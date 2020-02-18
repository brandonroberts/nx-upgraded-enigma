import {
  SchematicTestRunner,
  UnitTestTree
} from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { generateWorkspace } from '../utils/create-nx-workspace';

describe('my-schematic schematic', () => {
  const schematicRunner = new SchematicTestRunner(
    'workspace-schematics',
    path.join(
      __dirname,
      '../../../dist/out-tsc/tools/schematics/workspace-schematics.json'
    )
  );

  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await generateWorkspace('myorg', schematicRunner, appTree);
  });

  it('should generate a library', async () => {
    const options = { name: 'my-lib' };

    const tree = await schematicRunner
      .runSchematicAsync('my-schematic', options, appTree)
      .toPromise();

    expect(tree.exists('libs/my-lib/src/lib/my-lib.ts')).toBeTruthy();
  });
});
