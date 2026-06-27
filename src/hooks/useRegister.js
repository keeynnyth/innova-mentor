
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function useRegister() {

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  async function handleSubmit(event) {

    event.preventDefault();

    setError("");

    if (!formData.name.trim()) {

      setError("Ingresá tu nombre.");

      return;

    }

    if (!formData.email.trim()) {

      setError("Ingresá un correo electrónico.");

      return;

    }

    if (formData.password.length < 6) {

      setError("La contraseña debe tener al menos 6 caracteres.");

      return;

    }

    if (formData.password !== formData.confirmPassword) {

      setError("Las contraseñas no coinciden.");

      return;

    }

    try {

      setLoading(true);

      await signUp(
        formData.email,
        formData.password
      );

      navigate("/mentor");

    } catch (error) {

      switch (error.code) {

        case "auth/email-already-in-use":

          setError(
            "Ya existe una cuenta registrada con ese correo."
          );

          break;

        case "auth/invalid-email":

          setError(
            "El correo electrónico no es válido."
          );

          break;

        case "auth/weak-password":

          setError(
            "La contraseña es demasiado débil."
          );

          break;

        default:

          setError(
            "Ocurrió un error inesperado. Intentá nuevamente."
          );

      }

    } finally {

      setLoading(false);

    }

  }

  return {

    formData,

    error,

    loading,

    handleChange,

    handleSubmit,

  };

}