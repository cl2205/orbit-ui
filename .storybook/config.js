import { configure } from '@kadira/storybook';

const req = require.context('../src/components/', true, /.stories.js$/);
// /\**\/.stories.js$/

function loadStories() {
  require('../src/stories');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
