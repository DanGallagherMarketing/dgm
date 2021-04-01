import React from "react";
import PostCard from "./PostCard/PostCard";
import * as classes from "./Archive.module.css";
const Archive = (props) => {
  // console.log(props.posts);
  // console.log(typeof props.posts);
  props.posts.forEach((post) => console.log(post));
  return (
    <div className={classes.Archive}>
      {props.posts.map((post) => {
        console.log(post);
        return (
          <PostCard
            key={post.id}
            title={post.title}
            date={post.date}
            author={post.author.node.name}
            excerpt={post.excerpt}
          />
        );
      })}
    </div>
  );
};

export default Archive;
