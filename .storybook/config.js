import { configure, setAddon, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { withKnobs } from '@kadira/storybook-addon-knobs';

const req = require.context('../src/components/', true, /.stories.js$/);

setAddon(infoAddon);
addDecorator(withKnobs);

function loadStories() {
  require('../src/stories');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
