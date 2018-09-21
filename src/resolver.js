import Resolver from 'ember-resolver/resolvers/fallback';
import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

import { merge } from '@ember/polyfills';

const moduleConfig = buildResolverConfig(config.modulePrefix);
/*
 * If your application has custom types and collections, modify moduleConfig here
 * to add support for them.
 */

merge(moduleConfig.types, {
  config: { definitiveCollection: 'main' },
  util: { definitiveCollection: 'utils' },
  // ember-intl
  'ember-intl@adapter': { definitiveCollection: 'main' },
  'ember-intl@translation': { definitiveCollection: 'main' },
  translation: { definitiveCollection: 'main' },
  formats: { definitiveCollection: 'main' },
  cldr: { definitiveCollection: 'main' },
  'util:intl': { definitiveCollection: 'utils' },
  // ember-gestures
  'ember-gesture': { definitiveCollection: 'main' },
  mixin: { definitiveCollection: 'main' },
  "data-adapter": { definitiveCollection:'adapter' },
  "container-debug-adapter": { definitiveCollection:'adapter' },
  "resolver-for-debugging": { definitiveCollection:'main' }
});

moduleConfig.collections.main.types.push('config');
moduleConfig.collections.main.types.push('translation');

export default Resolver.extend({
  config: moduleConfig
});
