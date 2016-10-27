import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Message from './Message';

storiesOf('Message', module)
  .add('with text', () => (
    <Message text="Happy Humpday!"></Message>
  ))
  .add('with some emoji', () => (
    <Message text="😀 😎 👍 💯"></Message>
  ));
