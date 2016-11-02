import React, {PropTypes} from 'react';
import './Article.css';
import classNames from 'classnames';

const Article = (props) => {
  const { articleLink, articleTitle, text } = props;
  // @TODO: add shineDate
  return (
    <a className={classNames('message-bubble', 'mt-link')} href={ articleLink } target="_blank"
      ga-on="click"
      ga-event-category="Article"
      ga-event-action="click"
      ga-event-label="">
      <div className="container-msg">
        { text }
      </div>
      <div className="container-link">
        <div className="link-arrow"></div>
        <div className="link-message">{ articleTitle }</div>
      </div>
    </a>
  );
};

Article.propTypes = {
  text: PropTypes.string,
  articleLink: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired
};

export default Article;
