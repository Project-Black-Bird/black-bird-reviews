CREATE TABLE comments(
  comment_id SERIAL PRIMARY KEY NOT NULL,
  user_id int references users(user_id),
  comment text CHECK (LENGTH(comment) <= 500 ),
  like_id int references likes(like_id),
  post_id int references posts(post_id)
);