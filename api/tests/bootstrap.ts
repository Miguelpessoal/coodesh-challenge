/**
 * File source: https://bit.ly/3ukaHTz
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import TestUtils from '@ioc:Adonis/Core/TestUtils'
import { apiClient, assert, runFailedTests, specReporter } from '@japa/preset-adonis'
import type { Config } from '@japa/runner'
import { databasePlugin } from './utils/databasePlugin'

import './utils/extendApiClient'

export const plugins: Required<Config>['plugins'] = [
  assert(),
  runFailedTests(),
  apiClient(),
  databasePlugin(),
]

export const reporters: Required<Config>['reporters'] = [specReporter()]

export const runnerHooks: Pick<Required<Config>, 'setup' | 'teardown'> = {
  setup: [() => TestUtils.ace().loadCommands(), () => TestUtils.db().migrate()],
  teardown: [() => TestUtils.db().truncate()],
}

export const configureSuite: Required<Config>['configureSuite'] = (suite) => {
  if (suite.name === 'functional') {
    suite.setup(() => TestUtils.httpServer().start())
  }
}
