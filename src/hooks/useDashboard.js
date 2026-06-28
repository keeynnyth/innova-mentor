
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function useDashboard() {

  const navigate = useNavigate();

  const {
    currentUser,
    signOut,
  } = useAuth();

  async function handleLogout() {

    try {

      await signOut();

      navigate("/login");

    } catch (error) {

      console.error(error);

    }

  }

  return {

    currentUser,

    handleLogout,

  };

}