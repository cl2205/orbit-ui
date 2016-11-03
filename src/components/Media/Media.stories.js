import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';
import Media from './Media';

const stories = storiesOf('Media', module);
const mediaUrl = '//images.contentful.com/m5r0omx0hyjq/6QCbvBm6ze2Q2ws2EyYyei/697f3bb676881c7ba15d19d38d3468c3/pasted_image_at_2016_11_01_08_27_pm_360.png';
  storiesOf('Media')
    .addWithInfo(
      'Usage',
      `
        This is the Media component used for displaying media assets such as images and gifs.
      `,
      () => (<Media url={ mediaUrl } onClick={action('onClick')}/>),
      { inline: true }
    );
