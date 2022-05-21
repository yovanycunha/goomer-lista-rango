import style from './Home/Home.module.scss';
import { useRestaurantList } from '../hooks/useRestaurantContext/useRestaurantList';

const Home = () => {
  const { allRestaurants } = useRestaurantList()
  
  return (
    <div className={style.container}>
      <div className={style.topbar}/>
      <h1 className={style.title}>Bem-vindo ao Lista Rango</h1>

      <input placeholder='Buscar estabelecimento' className={style.input}/>
    </div>
  )
}

export default Home
