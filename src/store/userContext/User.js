import {createContext, useState} from 'react';

export const UserContext = createContext({
  user: {},
  updateUser: () => {},
  address:[],
  updateAddress:()=>{},
});

export default function UserContextProvider({children}) {
  const [user, setUser] = useState({name: '', email: ''});
  const [address, setAddress] = useState([]);
  function updateUser(userName, userEmail) {
    setUser(prev => ({name: userName, email: userEmail}));
  }
  function updateAddress(long, lat){
    setAddress(prev=>([long,lat]))
  }
  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        address,updateAddress
      }}>
      {children}
    </UserContext.Provider>
  );
}
