import React, { createContext, useState } from "react";

interface UserContextProps {
  user: userProps;
  setUser: React.Dispatch<React.SetStateAction<userProps>>;
}

export interface userProps {
  email?: string;

  name?: string;

  first_name?: string;

  last_name?: string;

  picture?: string;
}

export const UserContext = createContext<UserContextProps>({
  user: {},
  setUser: () => {},
});

export default function UserContextProvider({ children }: any) {
  const [user, setUser] = useState<userProps>({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
