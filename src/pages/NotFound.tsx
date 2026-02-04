import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h1 className="text-7xl md:text-9xl font-display text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-hero inline-flex items-center gap-2"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
