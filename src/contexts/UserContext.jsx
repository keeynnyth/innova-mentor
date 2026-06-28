
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "./AuthContext";

import { getUserProfile } from "../services/firebase/firestoreService";

const UserContext = createContext();

const initialProfile = {

  uid: "",

  name: "",

  email: "",

  goal: null,

  time: null,

  interests: [],

  streak: 0,

  weeklyProgress: 0,

};

export function UserProvider({ children }) {

  const { currentUser } = useAuth();

  const [userProfile, setUserProfile] = useState(initialProfile);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadUserProfile() {

      if (!currentUser) {

        setUserProfile(initialProfile);

        setLoading(false);

        return;

      }

      try {

        const profile = await getUserProfile(currentUser.uid);

        if (profile) {

          setUserProfile(profile);
         
        }

      } catch (error) {

        console.error(
          "Error loading user profile:",
          error
        );

      } finally {

        setLoading(false);

      }

    }

    loadUserProfile();

  }, [currentUser]);

  function updateProfile(field, value) {

    setUserProfile((prev) => ({

      ...prev,

      [field]: value,

    }));

  }

  function resetProfile() {

    setUserProfile(initialProfile);

  }

  return (

    <UserContext.Provider

      value={{

        userProfile,

        updateProfile,

        resetProfile,

        loading,

      }}

    >

      {children}

    </UserContext.Provider>

  );

}

export function useUser() {

  return useContext(UserContext);

}