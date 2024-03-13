// BottomNavigation.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage, setPage } from '../redux/actions/pageActions';

const BottomNavigation = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.page.currentPage);

  const handleNext = () => {
    dispatch(nextPage());
  };

  const handlePrev = () => {
    dispatch(prevPage());
  };

  const handlePageClick = pageNumber => {
    dispatch(setPage(pageNumber));
  };

  return (
    <div className="bottom-navigation">
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={() => handlePageClick(1)}>1</button>
      <button onClick={() => handlePageClick(2)}>2</button>
      {/* Add more buttons for additional pages */}
    </div>
  );
};

export default BottomNavigation;

