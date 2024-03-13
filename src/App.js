// // App.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CardList from './Components/CardList/CardList';
// // import { fetchPosts, removePost } from './redux/actions/postsActions';

// import Home from './Pages/Home';
// // import BottomNavigation from './Components/BottomNavigation';

// const App = () => {
//   const dispatch = useDispatch();
//   const { loading, posts} = useSelector(state => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleRemove = postId => {
//     dispatch(removePost(postId));
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <CardList posts={posts} onRemove={handleRemove} />
//           <Home />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost } from './redux/actions/postsActions';
import CardList from './Components/CardList/CardList';
import BottomNavigation from './components/BottomNavigation';

const App = () => {
  const dispatch = useDispatch();
  const { loading, posts, currentPage } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRemove = postId => {
    dispatch(removePost(postId));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CardList posts={posts} onRemove={handleRemove} />
          <BottomNavigation />
        </div>
      )}
    </div>
  );
};

export default App;
