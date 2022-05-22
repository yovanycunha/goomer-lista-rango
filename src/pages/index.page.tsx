import Loading from '@components/Loading/Loading';
import { useRestaurantList } from 'src/hooks/useRestaurantContext/useRestaurantList';

import RestaurantCard from './Home/components/RestaurantCard/RestaurantCard';

import style from './Home/Home.module.scss';

function Home() {
  const { allRestaurants } = useRestaurantList();

  const renderAllRestaurants = () => (
    <div className={style.cardsContainer}>
      {allRestaurants.map((restaurant) => (
        <RestaurantCard
          name={restaurant.name}
          address={restaurant.address}
          image={restaurant.image}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className={style.topbar} />
      <div className={style.container}>
        <h1 className={style.title}>Bem-vindo ao Lista Rango</h1>

        <input placeholder="Buscar estabelecimento" className={style.input} />

        {!allRestaurants ? <Loading /> : renderAllRestaurants()}
      </div>
    </>
  );
}

export default Home;
