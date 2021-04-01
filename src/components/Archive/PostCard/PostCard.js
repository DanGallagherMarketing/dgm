import React from "react";
import * as classes from "./PostCard.module.css";

const PostCard = (props) => {
  return (
    <div className={classes.PostCard}>
      <h4 className={classes.Title}>{props.title}</h4>
      <span className={classes.Date}>{props.date}</span>
      <span className={classes.Author}>{props.author}</span>
      {/* <p
        className={classes.Excerpt}
        dangerouslySetInnerHTML={{ __html: props.excerpt }}
      /> */}
    </div>
  );
};

export default PostCard;
