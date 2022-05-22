import Image from 'next/image';

import { TRestaurantCardProps } from './types';

import style from './RestaurantCard.module.scss';

function RestaurantCard(props: TRestaurantCardProps) {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src={props.image}
          alt="Restaurant Image"
          width={100}
          height={100}
        />
      </div>

      <div className={style.info}>
        <h2 className={style.name}>{props.name}</h2>
        <span className={style.address}>{props.address}</span>
      </div>
    </div>
  );
}

export default RestaurantCard;
