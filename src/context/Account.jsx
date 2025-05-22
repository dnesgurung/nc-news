import { createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "Paul Grump",
    username: "grumpy19",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });
  return (
    <AccountContext.Provider value = {{loggedInUser, setLoggedInUser}}>
        {children}
    </AccountContext.Provider>
  )
};
