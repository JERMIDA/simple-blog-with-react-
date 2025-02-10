import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
    const posts=props.posts;
    const titlee=props.title;
    // const handleDelete=props.handleDelete;
    return ( 
        <div className="blog-list">
                <h1>{titlee}</h1>
             {posts.map((post)=>(
                <div className="blog-preview" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                 <h2>{post.title}</h2>
                 <p>written by {post.author}</p>
                 </Link>
                   {/* <button onClick={()=>handleDelete(post.id)}>Delete Blog</button> */}
                </div>
            ))}        
        </div>
     );
}
 
export default BlogList;