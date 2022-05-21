import React from "react";
import RestaurantProvider from './RestaurantProvider/RestaurantProvider';
import { ProviderPropsType } from "./types";

const Providers = ({children}: ProviderPropsType) => {
  return(
    <RestaurantProvider>
      {children}
    </RestaurantProvider>
  )
}

export default Providers