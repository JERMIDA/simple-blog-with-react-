import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle]=useState('WRITE THE TITLE HERE ..');
    const [body,setBody]=useState('body here...');
    const [author,setAuthor]=useState('');
    const [isPending,setPending]=useState(false);
    const history=useHistory();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setPending(true);
      fetch('http://localhost:8000/posts',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
      })
      .then(()=>{
        console.log('new blog added');
        setPending(false);
        // history.go(-1);
        history.push('/');

      })
    }

    return ( 
    <div className="create">
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label >Blog Title:</label>
                <input 
                type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required/>
             <label >Blog Body:</label>
                    <textarea 
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    required>  
                    </textarea> 
            <label >Blog Author:</label>
           <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Author1">Author 1</option>
                    <option value="Author2">Author 2</option>
           </select>
         {!isPending && <button>Add blog </button>}
         {isPending && <button>Add blog...</button>}
           <p>{title}</p>
           <p>{body}</p>
           <p>{author}</p>
        </form>
    </div>
     );
}
export default Create;