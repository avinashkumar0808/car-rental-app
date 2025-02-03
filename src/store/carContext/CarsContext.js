import {createContext, useState} from 'react';

export const CarContext = createContext({cars: [], updateCars: () => {},carId:[],updateCarId:()=>{}});

export default function CarsContext({children}) {
  const [cars, setCars] = useState( []);
  const [carId, setCarId] = useState( []);
  const [reviews, setReviews] = useState( []);
  function updateCars(data) {
    setCars(prev=>[...data]);
  }
  function updateCarId(data) {
    setCarId(prev=>[...data]);
  }
  function updateReviews(data){
setReviews(prev=>[...data])
  }
  return (
    <CarContext.Provider value={{cars, updateCars,carId, updateCarId, reviews, updateReviews}}>
      {children}
    </CarContext.Provider>
  );
}
