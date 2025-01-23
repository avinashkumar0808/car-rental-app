import UserContextProvider from './store/userContext/User';
import CarsContext from './store/carContext/CarsContext';

import Main from './screens/Main';

export default function App() {
  return(
    <CarsContext>
       <UserContextProvider><Main/></UserContextProvider>
    </CarsContext>
  );
}
