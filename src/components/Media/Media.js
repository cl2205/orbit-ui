import React, {PropTypes} from 'react';
import './Media.css';
import classNames from 'classnames';

const Media = (props) => {
  const { url } = props;
  const mediaUrl = `https://${url}?w=400`;

  return (
    <img className="message-bubble mt-media" src={ mediaUrl }/>
  );
};
Media.propTypes = {
  url: PropTypes.string.isRequired
};

export default Media;
