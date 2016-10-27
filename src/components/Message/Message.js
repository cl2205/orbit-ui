import React, {PropTypes} from 'react';
import './Message.css';
import classNames from 'classnames';

const Message = (props) => {
  const { text } = props;
  return (
    <div className={classNames('mt', 'message-bubble')}>
      {text}
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string
};

Message.defaultProps = {
  text: "Your Daily Shine!"
};

export default Message;
