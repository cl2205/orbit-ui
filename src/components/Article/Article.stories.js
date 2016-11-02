import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Article from './Article';
import Message from '../Message';
console.log("Message: ", Message);

const stories = storiesOf('Article', module);

  storiesOf('Article')
    .addWithInfo(
      'Usage',
      `
        This is the Article component used to show Shine messages that link to articles for further reading.
      `,
      () => (
          <Article articleTitle='Tell me why 📖' articleLink="http://www.google.com" text="Today, open up to a shared bond." onClick={action('onClick')}/>
      ),
      { inline: true }
    );
