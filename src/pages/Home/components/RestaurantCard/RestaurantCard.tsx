/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import { useRouter } from 'next/router';

import { TRestaurantCardProps } from './types';

import style from './RestaurantCard.module.scss';

function RestaurantCard(props: TRestaurantCardProps) {
  const router = useRouter();

  const redirect = () => {
    router.push(`/restaurant/${props.id}`);
  };

  return (
    <div className={style.container} onClick={redirect}>
      <Image
        src={props.image}
        alt="Restaurant Image"
        width={100}
        height={100}
      />

      <div className={style.info}>
        <h2 className={style.name}>{props.name}</h2>
        <span className={style.address}>{props.address}</span>
      </div>
    </div>
  );
}

export default RestaurantCard;
