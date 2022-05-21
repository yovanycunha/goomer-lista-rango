import React from 'react'

type RestaurantHoursType = {
  "from": string,
  "to": string,
  "days": Number[]
}

export type RestaurantType = {
  id: Number;
  name: string;
  address: string;
  image: string;
  hours: RestaurantHoursType[];
};

export type RestaurantProviderPropsType = {
  children: React.ReactNode
}