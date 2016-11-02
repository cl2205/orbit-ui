import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { specs, describe, it } from 'storybook-addon-specifications';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
// import { mount } from 'enzyme';
// import expect from "expect";
import Message from './Message';

const stories = storiesOf('Message', module);

storiesOf('Message')
  .addWithInfo(
    'simple usage',
    `
      This is the basic usage of the Message component for displaying Daily Shine texts.
    `,
    () => (<Message text={text('Text', 'Happy Humpday! 😀 😎 👍 💯')}/>),
    { inline: true },
  );

stories.add('with text', () => {
  const story = <Message text="Happy Humpday!"></Message>;

  specs(() => describe('Message Bubble', function () {
    it('Should have text', function () {
      // let output = mount(story);
      // expect(output.text()).toContain('Happy Humpday');
    });
  }));
  
  return story;
});
