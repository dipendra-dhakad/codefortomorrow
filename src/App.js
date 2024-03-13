import "./App.css";
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "./Redux/slices/ProductSlices";
// import { setItems } from "./Redux/slices/ProductSlice";
// import { Im } from 'react-icons/im';
import { setPageItems } from "./Redux/slices/PageItems";
// import { setPageItems } from "./Redux/slices";

function App() {
 
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const output = await response.json();

    dispatch(setItems(output));
    const firstSix = output.slice(0, 6);
    dispatch(setPageItems(firstSix));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Products loading={loading} isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;