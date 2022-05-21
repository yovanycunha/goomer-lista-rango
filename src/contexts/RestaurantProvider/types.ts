import React from 'react';

type TRestaurantHours = {
  from: string;
  to: string;
  days: number[];
};

export type TRestaurant = {
  id: number;
  name: string;
  address: string;
  image: string;
  hours: TRestaurantHours[];
};

export type TRestaurantProviderProps = {
  children: React.ReactNode;
};
