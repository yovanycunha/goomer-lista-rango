import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'src/utils/endpoints/restaurantsAPI';
import { createContext } from 'use-context-selector';

import { TRestaurantProviderProps, TRestaurant } from './types';

export const RestaurantContext = createContext({} as TRestaurant[]);

function RestaurantProvider({ children }: TRestaurantProviderProps) {
  const [allRestaurants, setAllRestaurants] = useState<TRestaurant[]>([]);

  const getAllRestaurants = async () => {
    const res = await axios.get(BASE_URL);
    const data = await res.data;

    setAllRestaurants(data);

    return {
      data,
    };
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={allRestaurants}>
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantProvider;
