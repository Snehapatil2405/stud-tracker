// src/context/UserProvider.jsx
import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Admin",
    email: "admin@example.com",
    profilePic: "https://via.placeholder.com/80",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
