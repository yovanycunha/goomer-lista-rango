import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'src/utils/endpoints/restaurantsAPI';
import { createContext } from 'use-context-selector'
import { RestaurantProviderPropsType, RestaurantType } from './types';

export const RestaurantContext = createContext({} as RestaurantType[]);

const RestaurantProvider = ({ children }: RestaurantProviderPropsType) => {

  const [allRestaurants, setAllRestaurants] = useState<RestaurantType[]>([])

  const getAllRestaurants = async () => {
    const res = await axios.get(BASE_URL);
    const data = await res.data;

    setAllRestaurants(data)

    return {
      data: data
    }
    
  }

  useEffect(() => {
    getAllRestaurants()
  }, [])

  return (
    <RestaurantContext.Provider
      value={allRestaurants}
    >
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantProvider;