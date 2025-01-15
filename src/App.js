import UserContextProvider from './store/userContext/User';

import Main from './screens/Main';

export default function App() {
  return <UserContextProvider><Main/></UserContextProvider>;
}
