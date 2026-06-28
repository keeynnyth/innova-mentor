
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function PublicRoute({ children }) {

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {

    return <Navigate to="/mi-recorrido" replace />;

  }

  return children;

}

export default PublicRoute;