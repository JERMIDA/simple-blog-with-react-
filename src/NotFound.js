import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>page not found</h2>
            <p>sorry</p>
            <Link to='/'>BACK TO HOME</Link>
        </div>
     );
}
 
export default NotFound;