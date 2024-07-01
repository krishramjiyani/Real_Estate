import React, { createContext, useEffect, useState } from 'react';
import { housesData } from './../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //retrun all countries

    const allCountries = houses.map((house) => house.country);
    
    //return all unique countries or remove duplicate

    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    
    //set countries state
    setCountries(uniqueCountries);

  
  },[]);

  
  useEffect(() => {
    //retrun all properties

    const allProperties = houses.map((house) => house.type);
    
    //return all unique properties or remove duplicate

    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    
    //set properties state
    setProperties(uniqueProperties);

    
  },[]);
  

  const handleClick = () => {
    // console.log(country, property, price);
    setLoading(true);

   const isDefault = (str) => {
    return str.split(' ').includes('(any)');
   };
   
   const minPrice = parseInt(price.split(' ')[0]);
// console.log('minprice',minPrice);
   
const maxPrice = parseInt(price.split(' ')[2]);
  //  console.log('maxprice',maxPrice);

  const newHouses = housesData.filter((house)=>{
    const housePrice = parseInt(house.price);
  
    if(house.country === country && house.type === property &&
      housePrice >= minPrice && housePrice <= maxPrice
    )
    {

      return house;
    }

    if(isDefault(country) && isDefault(property) && isDefault(price)){
      return house;
    }

    if(!isDefault(country) && isDefault(property) && isDefault(price)){
      return house.country === country;
    }

    if(!isDefault(property) && isDefault(country) && isDefault(price)){
      return house.type === property;
    }

    if(!isDefault(price) && isDefault(country) && isDefault(property)){
      if(housePrice >= minPrice && housePrice <= maxPrice){

        return house;
      }
    }

    if(!isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.country === country && house.type === property;
    }

    if(!isDefault(country) && isDefault(property) && !isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house.country === country;
      }
    }

    if(!isDefault(country) && isDefault(property) && isDefault(price)){
      return house.country === country;
    }

    if(!isDefault(country) && !isDefault(property) && isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
     
        return house.type === property;
      }
    }

  }); 
  // console.log(newHouses);
  setTimeout(()=>{
    return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
   
    setLoading(false);
  }, 800);
  };

  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      setHouses,
      loading,
      handleClick,
      loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
