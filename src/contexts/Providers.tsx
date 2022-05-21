import React from 'react';

import { TProviderProps } from './types';

import RestaurantProvider from './RestaurantProvider/RestaurantProvider';

function Providers({ children }: TProviderProps) {
  return <RestaurantProvider>{children}</RestaurantProvider>;
}

export default Providers;
