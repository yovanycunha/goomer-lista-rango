import { RestaurantContext } from 'src/contexts';
import { useContextSelector } from 'use-context-selector';

export const useRestaurantList = () => {
  const allRestaurants = useContextSelector(
    RestaurantContext,
    (restaurants) => restaurants
  );

  return { allRestaurants };
};
