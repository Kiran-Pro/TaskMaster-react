import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-background text-theme-text font-poppins px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-extrabold text-theme-primary mb-4">404</h1>
        <p className="text-lg md:text-xl text-theme-muted mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-theme-primary rounded-lg hover:bg-theme-secondary transition shadow font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
