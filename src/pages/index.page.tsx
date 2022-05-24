import Loading from '@components/Loading/Loading';
import useDebounce from '@hooks/useDebounce/useDebounce';
import { useCallback, useEffect, useState } from 'react';
import { TRestaurant } from 'src/contexts/RestaurantProvider/types';
import { useRestaurantList } from 'src/hooks/useRestaurantContext/useRestaurantList';

import RestaurantCard from './Home/components/RestaurantCard/RestaurantCard';

import style from './Home/Home.module.scss';

const DEBOUNCE_DELAY = 1000;

function Home() {
  const { allRestaurants } = useRestaurantList();
  const [keyword, setKeyword] = useState<any>('');
  const [filteredRestaurants, setFilteredRestaurants] = useState<TRestaurant[]>(
    []
  );
  const debouncedKeyword = useDebounce({
    value: keyword,
    delay: DEBOUNCE_DELAY,
  });

  const renderAllRestaurants = () => (
    <div className={style.cardsContainer}>
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard
          name={restaurant.name}
          address={restaurant.address}
          image={restaurant.image}
        />
      ))}
    </div>
  );

  const filterRestaurant = useCallback(() => {
    const filtered = allRestaurants.filter((item: TRestaurant) =>
      item.name.toLowerCase().trim().includes(keyword.toLowerCase().trim())
    );

    return filtered;
  }, [allRestaurants, keyword]);

  useEffect(() => {
    setFilteredRestaurants(filterRestaurant());
  }, [allRestaurants, filterRestaurant]);

  useEffect(() => {
    setKeyword(debouncedKeyword);
  }, [debouncedKeyword]);

  return (
    <>
      <div className={style.topbar} />
      <div className={style.container}>
        <h1 className={style.title}>Bem-vindo ao Lista Rango</h1>

        <input
          type="search"
          aria-label="search"
          placeholder="Buscar estabelecimento"
          className={style.input}
          onChange={(e) => setKeyword(e.target.value)}
        />

        {!allRestaurants ? <Loading /> : renderAllRestaurants()}
      </div>
    </>
  );
}

export default Home;
