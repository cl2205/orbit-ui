import React, {PropTypes} from 'react';
import './Article.css';
import classNames from 'classnames';

const Article = (props) => {
  const { articleLink, articleTitle, text, broadcastDate } = props;

  return (
    <div className={classNames('message-bubble', 'mt-link')}>
      <div className="container-msg">
        { text }
      </div>
      <a className="container-link" href={ articleLink } target="_blank"
        ga-on="click"
        ga-event-category="Article"
        ga-event-action="click"
        ga-event-label={ broadcastDate }>
        <div className="link-arrow"></div>
        <div className="link-message">{ articleTitle }</div>
      </a>
    </div>
  );
};

Article.propTypes = {
  text: PropTypes.string,
  articleLink: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  broadcastDate: PropTypes.string
};

export default Article;
