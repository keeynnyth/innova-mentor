
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const UserContext = createContext();

const STORAGE_KEY = "innovaMentorUserProfile";

const initialProfile = {
  goal: "",
  challenge: "",
  time: "",
  interests: [],
};

export function UserProvider({ children }) {

  const [userProfile, setUserProfile] = useState(() => {

    const savedProfile = localStorage.getItem(STORAGE_KEY);

    if (savedProfile) {
      return JSON.parse(savedProfile);
    }

    return initialProfile;

  });

  function updateProfile(field, value) {

    setUserProfile((prev) => ({

      ...prev,

      [field]: value,

    }));

  }

  function resetProfile() {

    setUserProfile(initialProfile);

  }

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(userProfile)
    );

  }, [userProfile]);

  return (

    <UserContext.Provider
      value={{
        userProfile,
        updateProfile,
        resetProfile,
      }}
    >

      {children}

    </UserContext.Provider>

  );

}

export function useUser() {

  return useContext(UserContext);

}