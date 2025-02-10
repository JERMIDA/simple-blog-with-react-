import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: post, error, isPending } = useFetch(`http://localhost:8000/posts/${id}`);
    const history = useHistory();

    const handleDeleteClick = () => {
        fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete the post');
            }
            history.push('/'); // Redirect after successful deletion
        })
        .catch(err => {
            console.error(err);
            // Optionally, you can set an error state here to display an error message
        });
    };

    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {post && (
                <article>
                    <h3>{post.title}</h3>
                    <p>written by {post.author}</p>
                    <div>{post.body}</div>
                    <button onClick={handleDeleteClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails; // Updated component name for consistency
