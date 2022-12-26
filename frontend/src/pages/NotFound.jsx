import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2 className="text-3xl text-primary mb-8">Error 404 - Sorry</h2>
            <p className="my-5 mx-2">Page not found</p>
            <Link to='/' className="bg-error text-[#fff] border-none border-0 p-2 rounded-lg cursor-pointer">Back to Home page</Link>
        </div>
    );
}

export default NotFound;