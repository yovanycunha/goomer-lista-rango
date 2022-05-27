import Image from 'next/image';
import { useRouter } from 'next/router';

import Loading from '@components/Loading/Loading';
import { useRestaurantList } from '@hooks/useRestaurantContext/useRestaurantList';
import { useEffect, useReducer, useState } from 'react';
import { TRestaurant } from 'src/contexts/RestaurantProvider/types';

import style from './Restaurant.module.scss';

function Restaurant() {
  const { allRestaurants } = useRestaurantList();
  const router = useRouter();
  const [restaurant, setRestaurant] = useState<TRestaurant>();
  // const [loading, toggleLoading] = useReducer((l) => !l, true); usar no modal

  const renderOpeningHours = () => {
    const days = [];
  };

  useEffect(() => {
    setRestaurant(
      allRestaurants.filter((r) => String(r.id) === router!.query!.id)[0]
    );
  }, [allRestaurants, router]);

  return (
    <>
      <div className={style.topbar} />
      <div className={style.container}>
        {!restaurant ? (
          <Loading />
        ) : (
          <>
            <div className={style.infoContainer}>
              <Image
                src={restaurant.image}
                alt="Restaurant Image"
                width={100}
                height={100}
              />
              <div className={style.info}>
                <h1>{restaurant.name}</h1>
                <span>{restaurant.address}</span>
              </div>
            </div>

            <div className={style.content}>
              <input type="search" />
            </div>
            <div>CARDÁPIO</div>
          </>
        )}
      </div>
    </>
  );
}

export default Restaurant;
