import {createContext, useState} from 'react';

export const CarContext = createContext({cars: {}, updateCars: () => {}});

export default function CarsContext({children}) {
  const [cars, setCars] = useState( []);
  const [carId, setCarId] = useState( []);
  function updateCars(data) {
    setCars(prev=>[...data]);
  }
  function updateCarId(data) {
    setCarId(prev=>[...data]);
  }
  return (
    <CarContext.Provider value={{cars, updateCars,carId, updateCarId}}>
      {children}
    </CarContext.Provider>
  );
}
