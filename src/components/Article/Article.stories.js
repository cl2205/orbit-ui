import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Article from './Article';

const stories = storiesOf('Article', module);

  storiesOf('Article')
    .addWithInfo(
      'Usage',
      `
        This is the Article component used to show Shine messages that link to articles for further reading.
      `,
      () => (
          <Article articleTitle='Tell me why 📖' articleLink="http://www.shinetext.com" text="Today, open up to a shared bond." onClick={action('onClick')}/>
      ),
      { inline: true }
    );
