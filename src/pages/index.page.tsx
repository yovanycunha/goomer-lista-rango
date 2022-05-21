import style from './Home/Home.module.scss';
import { useRestaurantList } from '@hooks/useRestaurantContext/useRestaurantList';
import RestaurantCard from './Home/components/RestaurantCard/RestaurantCard';
import Loading from '@components/Loading/Loading';

const Home = () => {
  const { allRestaurants } = useRestaurantList()

  const cardMock = allRestaurants[0];

  console.log('mock', cardMock);

  const renderAllRestaurants = () => {
    return (
      <div className={style.cardsContainer}>
      { allRestaurants.map(restaurant => (
        <RestaurantCard name={restaurant.name} address={restaurant.address}/>
        ))
      }
      </div>
    )
  }
  
  
  return (
    <>
      <div className={style.topbar}/>
      <div className={style.container}>
      <h1 className={style.title}>Bem-vindo ao Lista Rango</h1>

      <input placeholder='Buscar estabelecimento' className={style.input}/>

      { !allRestaurants ? <Loading/> : renderAllRestaurants() }
    </div>
    </>
  )
}

export default Home
