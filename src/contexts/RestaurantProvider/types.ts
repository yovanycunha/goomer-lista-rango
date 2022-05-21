import React from 'react'

type RestaurantHoursType = {
  "from": String,
  "to": String,
  "days": Number[]
}

export type RestaurantType = {
  id: Number;
  name: String;
  address: String;
  image: String;
  hours: RestaurantHoursType[];
};

export type RestaurantProviderPropsType = {
  children: React.ReactNode
}