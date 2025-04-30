import React from 'react';
import { useAnimateInView } from '../../../utils/useAnimateInView';

const posts = [
  {
    title: 'Partnership Forum',
    // eslint-disable-next-line max-len
    text: 'Щоб краще познайомитися з нами, приходь на наші заходи. В календарі заходів анонси всіх активностей, які проводить наша організація.',
  },
  {
    title: 'Partnership Forum',
    // eslint-disable-next-line max-len
    text: 'Щоб краще познайомитися з нами, приходь на наші заходи. В календарі заходів анонси всіх активностей, які проводить наша організація.',
  },
  {
    title: 'Partnership Forum',
    // eslint-disable-next-line max-len
    text: 'Щоб краще познайомитися з нами, приходь на наші заходи. В календарі заходів анонси всіх активностей, які проводить наша організація.',
  },
  {
    title: 'Partnership Forum',
    // eslint-disable-next-line max-len
    text: 'Щоб краще познайомитися з нами, приходь на наші заходи. В календарі заходів анонси всіх активностей, які проводить наша організація.',
  },
];

const PostCard = ({ post, delay }) => {
  const ref = useAnimateInView();

  return (
    <div
      ref={ref}
      className="post-card can-animate"
      style={{ animationDelay: delay }}
    >
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </div>
  );
};

export const S4 = () => {
  const sectionTitleRef = useAnimateInView();

  return (
    <div id="s4" className="screen">
      <div className="container_res">
        <div ref={sectionTitleRef} className="col">
          <h2>Результати нашої діяльності</h2>
        </div>
        <div className="posts-wrapper">
          <div className="posts-grid">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} delay={`${index * 0.2}s`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
