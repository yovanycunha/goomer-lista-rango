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
  const [restaurant, setRestaurant] = useState<TRestaurant>(
    allRestaurants.filter((r) => String(r.id) === router!.query!.id)[0]
  );
  const [loading, toggleLoading] = useReducer((l) => !l, true);

  return (
    <div className={style.container}>
      {loading && <Loading />}
      {/* <Image
        src={restaurant!.image}
        alt="Restaurant Image"
        width={100}
        height={100}
      /> */}
    </div>
  );
}

export default Restaurant;
