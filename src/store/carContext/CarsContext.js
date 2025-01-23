import {createContext, useState} from 'react';

export const CarContext = createContext({cars: {}, updateCars: () => {}});

export default function CarsContext({children}) {
  const [cars, setCars] = useState( []);
  function updateCars(data) {
    setCars(prev=>[...prev,data]);
  }
  return (
    <CarContext.Provider value={{cars, updateCars}}>
      {children}
    </CarContext.Provider>
  );
}
