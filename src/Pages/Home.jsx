import { useEffect, useState } from "react";
import Spinner from "../Components/Spinner/Spinner";
import CardList from "../Components/CardList/CardList";
import BottomNavigation from "../Components/BottomNavigation/BottomNavigation";

const Home = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [loading ,setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res= await fetch(API_URL);
      const data= await res.json();

      setPosts(data);

    } catch (error) {
      console.log("Error agya hejii");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchProductData();
  },[])



  return (
  <div>
    {
      loading ? <Spinner/> :
      posts.length > 0 ?
      (<div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80v]">
        {
           posts.map( (post) =>(
            <CardList key = {post.id}  post={post}/>
           ))
        }
       
      </div>):
      <div className="flex justify-center items-center">
        <p>No Data Found</p>
      </div> 
    }
  </div>
  
  
  );
};

export default Home;
