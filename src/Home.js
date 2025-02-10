// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const {data:post,isPending,error}=useFetch('http://localhost:8000/posts');
    
    return (
        <div className="home">
            {isPending && <div>LOADING...</div>}
            {error && <div>{error}</div>}
            {post && <BlogList posts={post} title="ALL BLOGS" />}
  
        </div>
    );
};

export default Home;
