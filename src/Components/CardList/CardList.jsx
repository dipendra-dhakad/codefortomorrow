
// CardList.js
import React from 'react';
import Card from './Card';

const CardList = ({ posts, onRemove }) => {
  return (
    <div className="card-list">
      {posts.map(post => (
        <Card key={post.id} post={post} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CardList;

